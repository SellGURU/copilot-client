type ChatType =  {
  from: "Ai" | "user";
  text: string;
  message_key:string;
  currentconverationid: string;
  instanceid: string;
  audio_file: string;
}

type NodesType = {
    id: string,
    label: string,
    size: number
    category1:string
    category2:string
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

export type {ChatType,NodesType,EdgeType,GetEdgeAndNodesType}