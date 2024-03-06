/* eslint-disable @typescript-eslint/no-explicit-any */
type ChatType =  {
  from: "Ai" | "user";
  text: string;
  message_key:string;
  currentconverationid: string;
  instanceid: string;
  audio_file: string;
  additinalData:Array<any>
}

type NodesType = {
    id: string,
    label: string,
    size: number
    category1:string
    category2:string
    color:string
}

type EdgeType = {
    source: string,
    target: string,
    weight: number
}

type GetEdgeAndNodesType = {
  nodes:Array<NodesType>,
  edges:Array<EdgeType>
}

interface SideMenuItem  {
    title:string
    src:string
    path:string
}

export type {ChatType,NodesType,EdgeType,GetEdgeAndNodesType,SideMenuItem}