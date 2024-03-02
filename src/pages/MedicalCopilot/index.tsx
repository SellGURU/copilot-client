/* eslint-disable @typescript-eslint/no-explicit-any */
import { ControlsContainer, FullScreenControl, SearchControl, SigmaContainer, ZoomControl } from "@react-sigma/core"
import { GraphDefault } from "../../components/GraphSubComponents/Graph"
import { LayoutForceAtlas2Control } from "@react-sigma/layout-forceatlas2"
import { AddAditinalData, ChatBox, ReferenceBox, RefrencessData } from "../../components"
import { useState } from "react"
import { ChatType } from "../../types"
import FlowTest from "../../api/Flow"
import TestPage from "../../api/TestPage"

const MedicalCopilot = () => {
    const [showAdditinalModal,setShowAdditinalModal] = useState(false)
    const [showRefrencessModal,setShowRefrencessModal] = useState(false)
    const [additinalData, setAditinalData] = useState<any>({});
    const [relatedNotes, setRelatedNotes] = useState<Array<any>>([]);
    const [additinalDataResolves, setAdditinalDataResolved] = useState<
        Array<any>
    >([]);
    const apikey = 'd6ea49f5eb214e448e4d339b82a1a8c7'      
    const [chats,setChats] = useState<Array<ChatType>>([])
    const [text,setText] = useState('')
    const sendToApi = () => {
        const resolvedData: any = {
            apikey: apikey,
            getcurrentconvesationid: chats.length > 0 ?  chats[chats.length -1].currentconverationid : 1,
            text: text,
            language: "English",
        };  
        if(additinalDataResolves){
            additinalDataResolves.filter((item: { key: string }) => item.key != 'Language').forEach((item: { key: string | number; value: any }) => {
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
    const getRefrencess =(selectChat:ChatType) => {
        const testApi = new TestPage()
        testApi.relatedNodes({
            botid: '7b53073af5',
            apikey: apikey,
            current_conversation_id:selectChat.currentconverationid,
            instanceid:selectChat.instanceid            
        },(res) => {
            setRelatedNotes(res.data)
            setShowRefrencessModal(true)
        })
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
                <ChatBox getRefrences={getRefrencess} sendToApi={sendToApi} text={text} setText={setText} chats={chats} setAditinalData={setAditinalData} openAdditinalData={setShowAdditinalModal}></ChatBox>
            </div>
            <AddAditinalData additinalDataResolves={additinalDataResolves} setAdditinalDataResolved={setAdditinalDataResolved} sendToApi={sendToApi} data={additinalData} isOpen={showAdditinalModal} onClose={() =>{setShowAdditinalModal(false)}}></AddAditinalData>
            <RefrencessData relatedNodes={relatedNotes} onClose={() => {
                setShowRefrencessModal(false)
            }} isOpen={showRefrencessModal}></RefrencessData>
        </div> 
        </>
    )
}

export default MedicalCopilot