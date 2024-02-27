/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import Graph from "graphology";
import { Attributes } from "graphology-types";
import { useSigma, useRegisterEvents, useLoadGraph, useSetSettings } from "@react-sigma/core";
import { useGraphPosition } from "../../hooks";
import { graphText } from "../../data/graphText";
import { useConstructor } from "../../help";
import chroma from "chroma-js";
import ForceSupervisor from "graphology-layout-force/worker";
export interface GraphDefaultProps {

}
export const GraphDefault: React.FC<GraphDefaultProps> = () => {
  const sigma = useSigma();
  const registerEvents = useRegisterEvents();
  const loadGraph = useLoadGraph();
  const setSettings = useSetSettings();
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [draggedNode, setDraggedNode] = useState<string | null>(null);
  const graph = new Graph();
  const positions = useGraphPosition()
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
  useConstructor(() => {
    const layout = new ForceSupervisor(graph, { isNodeFixed: (_: any, attr: { highlighted: any; }) => attr.highlighted });
    layout.start();       
    const parentNods = graphText.replace(/\n/g,"").split('### ')
    parentNods.map((_item,index) => {
        if(index != 0) {
            resolveParentNodes(parentNods[index].split(/\d+/g))
        }
    })
    loadGraph(graph);
  })
  useEffect(() => {
    registerEvents({
      enterNode: (event) => setHoveredNode(event.node),
      leaveNode: () => setHoveredNode(null),
      downNode: (e) => {
          setDraggedNode(e.node);
          sigma.getGraph().setNodeAttribute(e.node, "highlighted", true);
      },
      mouseup: () => {
          if (draggedNode) {
          setDraggedNode(null);
          sigma.getGraph().removeNodeAttribute(draggedNode, "highlighted");
          }
      },
      mousedown: () => {
          // Disable the autoscale at the first down interaction
          if (!sigma.getCustomBBox()) sigma.setCustomBBox(sigma.getBBox());
      },
      mousemove: (e) => {
          if (draggedNode) {
          // Get new position of node
          const pos = sigma.viewportToGraph(e);
          sigma.getGraph().setNodeAttribute(draggedNode, "x", pos.x);
          sigma.getGraph().setNodeAttribute(draggedNode, "y", pos.y);

          // Prevent sigma to move camera:
          e.preventSigmaDefault();
          e.original.preventDefault();
          e.original.stopPropagation();
          }
      },
      touchup: () => {
          if (draggedNode) {
          setDraggedNode(null);
          sigma.getGraph().removeNodeAttribute(draggedNode, "highlighted");
          }
      },
      touchdown: () => {
          // Disable the autoscale at the first down interaction
          if (!sigma.getCustomBBox()) sigma.setCustomBBox(sigma.getBBox());
      },
      touchmove: (e:any) => {
          if (draggedNode) {
          // Get new position of node
          const pos = sigma.viewportToGraph(e);
          sigma.getGraph().setNodeAttribute(draggedNode, "x", pos.x);
          sigma.getGraph().setNodeAttribute(draggedNode, "y", pos.y);

          // Prevent sigma to move camera:
          e.preventSigmaDefault();
          e.original.preventDefault();
          e.original.stopPropagation();
          }
      },      
    });
  }, [draggedNode, loadGraph, registerEvents, sigma]);

  useEffect(() => {
    setSettings({
      nodeReducer: (node, data) => {
        const graph = sigma.getGraph();
        const newData: Attributes = { ...data, highlighted: data.highlighted || false };

        if (hoveredNode) {
          if (node === hoveredNode || graph.neighbors(hoveredNode).includes(node)) {
            newData.highlighted = true;
          } else {
            newData.color = "#E2E2E2";
            newData.highlighted = false;
          }
        }
        return newData;
      },
      edgeReducer: (edge, data) => {
        const graph = sigma.getGraph();
        const newData = { ...data, hidden: false };

        if (hoveredNode && !graph.extremities(edge).includes(hoveredNode)) {
          newData.hidden = true;
        }
        return newData;
      },
    });
  }, [hoveredNode, setSettings, sigma]);

  return null;
};