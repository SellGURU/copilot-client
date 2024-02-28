/* eslint-disable @typescript-eslint/no-explicit-any */
import { ControlsContainer, FullScreenControl, SearchControl, SigmaContainer, ZoomControl } from "@react-sigma/core"
import { GraphDefault } from "../../components/GraphSubComponents/Graph"
import { LayoutForceAtlas2Control } from "@react-sigma/layout-forceatlas2"
import { AddAditinalData, ChatBox, ReferenceBox } from "../../components"
import { useState } from "react"
import { ChatType } from "../../types"
import FlowTest from "../../api/Flow"

const MedicalCopilot = () => {
    const [showAdditinalModal,setShowAdditinalModal] = useState(false)
    const [additinalData, setAditinalData] = useState<any>({});
    const [chats,setChats] = useState<Array<ChatType>>([])
    const [text,setText] = useState('')
    const sendToApi = (additinal?:any) => {
        const resolvedData: any = {
            apikey: '571b4587fcb34b4185b4c8282d0fc71c',
            getcurrentconvesationid: chats.length > 0 ?  chats[chats.length -1].currentconverationid : 1,
            text: text,
            language: "English",
        };  
        if(additinal){
            additinal.filter((item: { key: string }) => item.key != 'Language').forEach((item: { key: string | number; value: any }) => {
                resolvedData[item.key] = item.value;
            }); 
        }
        const flowApi = new FlowTest()
        const newchat = chats
        if(text.length > 0 || chats.length == 0) {
            newchat.push({
                audio_file:'',
                currentconverationid:'1',
                from:'user',
                instanceid:'',
                message_key:'',
                text:text
            })
            setChats(newchat)          
            flowApi.flow(resolvedData,(res) => {
                setChats([...newchat,
                    {
                        audio_file:res.data.answer.audio_file as string,
                        currentconverationid:res.data.currentconverationid as string,
                        from:'Ai',
                        instanceid:res.data.instanceid as string,
                        message_key:'',
                        text:res.data.answer.answer,
                    }
                ])
            })    
        }
        setText('')    

    }
    return (
        <>
        <div className="w-[100%] relative">
            <SigmaContainer style={{ height: "100vh", width: "100%" }}>
                <GraphDefault ></GraphDefault>
                {/* <LoadGraph /> */}
            <ControlsContainer position={"bottom-right"}>
                <ZoomControl />
                <FullScreenControl />
                <LayoutForceAtlas2Control autoRunFor={5000} settings={{ settings: { slowDown: 10 } }} />
            </ControlsContainer>
            <ControlsContainer position={"top-right"}>
                <SearchControl style={{ width: "200px" }} />
            </ControlsContainer>      
                
            </SigmaContainer>

            <div className="absolute bottom-14 left-6">
                <ReferenceBox></ReferenceBox>
                <ChatBox sendToApi={sendToApi} text={text} setText={setText} chats={chats} setAditinalData={setAditinalData} openAdditinalData={setShowAdditinalModal}></ChatBox>
            </div>
            <AddAditinalData sendToApi={sendToApi} data={additinalData} isOpen={showAdditinalModal} onClose={() =>{setShowAdditinalModal(false)}}></AddAditinalData>
        </div> 
        </>
    )
}

export default MedicalCopilot