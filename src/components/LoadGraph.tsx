/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLoadGraph,useSigma } from "@react-sigma/core";
import Graph from "graphology";
import {graphText} from '../data/graphText';
import { useConstructor } from "../help";
import chroma from "chroma-js";
import ForceSupervisor from "graphology-layout-force/worker";
import {useGraphPosition} from "../hooks";
export const LoadGraph = () => {
  const graph = new Graph();
  const sigma = useSigma();
  const positions = useGraphPosition()
  const loadGraph = useLoadGraph();
 
  const resolveParentNodes = (resolveString :Array<string>) => {
    graph.addNode(resolveString[0], { x: positions.Xlayer1, y: positions.Ylayer1, size: 15, label: resolveString[0], color:chroma.random().hex()});
    resolveString.map((_item,index) => {
        if(index!= 0) {
            resolveLayer2(resolveString[index].split('-'),resolveString[0])
        }
    })
  }

  const resolveLayer2 = (resolveString :Array<string>,parentKey:string) => {
    graph.addNode(resolveString[0], { x: positions.Xlayer2, y: positions.Ylayer2, size: 10, label: resolveString[0], color:chroma.random().hex()});
    graph.addEdgeWithKey(resolveString[0], parentKey, resolveString[0]);
    resolveString.map((_item,index) => {
        if(index!= 0){
            resolveLayer3(resolveString[index],resolveString[0])
        }
    })
  }

  const resolveLayer3 = (resolveString :string,parentKey:string) => {
    graph.addNode(resolveString, { x: positions.Xlayer3, y: positions.Ylayer3, size: 5, label: resolveString, color:chroma.random().hex()});
    graph.addEdgeWithKey(resolveString, resolveString, parentKey);
  }
  let draggedNode: string | null = null;
  let isDragging = false;  

  const layout = new ForceSupervisor(graph, { isNodeFixed: (_: any, attr: { highlighted: any; }) => attr.highlighted });
  layout.start();    
  useConstructor(() => {
    const parentNods = graphText.replace(/\n/g,"").split('### ')
    parentNods.map((_item,index) => {
        if(index != 0) {
            resolveParentNodes(parentNods[index].split(/\d+/g))
        }
    })
    loadGraph(graph);
    sigma.on("downNode", (e) => {
        isDragging = true;
        draggedNode = e.node;
        graph.setNodeAttribute(draggedNode, "highlighted", true);
        loadGraph(graph);
    });    

    sigma.getMouseCaptor().on("mousemovebody", (e) => {
      if (!isDragging || !draggedNode) return;

      const pos = sigma.viewportToGraph(e);
      graph.setNodeAttribute(draggedNode, "x", pos.x);
      graph.setNodeAttribute(draggedNode, "y", pos.y);
      e.preventSigmaDefault();
      e.original.preventDefault();
      e.original.stopPropagation();
      loadGraph(graph);
    });    
    sigma.getMouseCaptor().on("mouseup", () => {
      if (draggedNode) {
        graph.removeNodeAttribute(draggedNode, "highlighted");
      }
      isDragging = false;
      draggedNode = null;
      loadGraph(graph);
    });     
    sigma.getMouseCaptor().on("mousedown", () => {
      if (!sigma.getCustomBBox()) sigma.setCustomBBox(sigma.getBBox());
    });       
  })
  return null;
};