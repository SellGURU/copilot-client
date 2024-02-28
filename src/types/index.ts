type ChatType =  {
  from: "Ai" | "user";
  text: string;
  message_key:string;
  currentconverationid: string;
  instanceid: string;
  audio_file: string;
}

export type {ChatType}