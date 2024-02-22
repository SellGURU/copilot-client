import { useLoadGraph } from "@react-sigma/core";
import Graph from "graphology";
import {graphText} from '../data/graphText';
import { useConstructor } from "../help";
import chroma from "chroma-js";
export const LoadGraph = () => {
  const graph = new Graph();
  const loadGraph = useLoadGraph();
  let x = 0
  const y = 0
  let xLayer2 = 0
  let yLayer2 = 10
  let xLayer3 = 0
  let yLayer3 = 20  
  const resolveParentNodes = (resolveString :Array<string>) => {
    graph.addNode(resolveString[0], { x: x, y: y, size: 15, label: resolveString[0], color:chroma.random().hex()});
    resolveString.map((_item,index) => {
        if(index!= 0) {
            resolveLayer2(resolveString[index].split('-'),resolveString[0])
        }
    })
    x = x +150
    loadGraph(graph);
  }

  const resolveLayer2 = (resolveString :Array<string>,parentKey:string) => {

    graph.addNode(resolveString[0], { x: xLayer2, y: yLayer2, size: 10, label: resolveString[0], color:chroma.random().hex()});
    graph.addEdgeWithKey(resolveString[0], parentKey, resolveString[0]);
    resolveString.map((_item,index) => {
        if(index!= 0){
            resolveLayer3(resolveString[index],resolveString[0])
        }
    })
    xLayer2 += 40
    yLayer2 += 10
    loadGraph(graph);
  }

  const resolveLayer3 = (resolveString :string,parentKey:string) => {
    graph.addNode(resolveString+xLayer3, { x: xLayer3, y: yLayer3, size: 5, label: resolveString, color:chroma.random().hex()});
    graph.addEdgeWithKey(resolveString+xLayer3, resolveString+xLayer3, parentKey);
    loadGraph(graph);
    xLayer3 += 10
    yLayer3 += 5
  }
  useConstructor(() => {
    const parentNods = graphText.split('### ')

    console.log(parentNods[1].split(/\d+/g))
    parentNods.map((_item,index) => {
        if(index != 0) {
            resolveParentNodes(parentNods[index].split(/\d+/g))
        }
    })
    loadGraph(graph);
  })

//   useEffect(() => {
    
//     // graph.addNode("first", { x: 0, y: 0, size: 15, label: "My first node", color: "#FA4F40" });
//     loadGraph(graph);
//   }, [loadGraph]);

  return null;
};