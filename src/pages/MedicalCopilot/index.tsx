/* eslint-disable @typescript-eslint/no-explicit-any */
import { ControlsContainer, FullScreenControl, SearchControl, SigmaContainer, ZoomControl } from "@react-sigma/core"
import { GraphDefault } from "../../components/GraphSubComponents/Graph"
// import { LayoutForceAtlas2Control } from "@react-sigma/layout-forceatlas2"
import { AddAditinalData, AdditinalBox, FilterBox, RefrencessData } from "../../components"
import { useReducer, useRef, useState } from "react"
import { ChatType } from "../../types"
import FlowTest from "../../api/Flow"
import TestPage from "../../api/TestPage"
import { subscribe } from "../../utils/event"
import { useConstructor } from "../../help"
// import TestPage from "../../api/TestPage"

const MedicalCopilot = () => {
    const [showAdditinalModal,setShowAdditinalModal] = useState(false)
    const [showRefrencessModal,setShowRefrencessModal] = useState(false)
    const [additinalData,setAditinalData] = useState<any>({});
    const [exeNods,setexeNods] = useState<Array<string>>([])
    const [relatedNotes,setRelatedNotes] = useState<Array<any>>([]);
    const [additinalDataResolves, setAdditinalDataResolved] = useState<
        Array<any>
    >([]);
    const [chatLoading,setchatLoading] = useState(false)
    const apikey = 'df1d60cca09d4ddda756c6aae1423567'      
    const [chats,setChats] = useState<Array<ChatType>>([])
    const [text,setText] = useState('')
    const sendToApi = () => {
        setchatLoading(true)
        const resolvedData: any = {
            apikey: apikey,
            getcurrentconvesationid: 1,
            text: text,
            exclude_list:exeNods,
            language: "English",
        };  
        if(additinalDataResolves){
            additinalDataResolves.filter((item: { key: string }) => item.key != 'Language').forEach((item: { key: string | number; value: any }) => {
                resolvedData[item.key] = item.value;
            }); 
        }
        const flowApi = new FlowTest()
        const newchat = chats
        newchat.push({
            audio_file:'',
            currentconverationid:'1',
            from:'user',
            instanceid:'',
            message_key:'',
            text:text,
            additinalData:[]
        })
        setChats(newchat)          
        flowApi.flow(resolvedData,(res) => {
            setChats([...newchat,
                {
                    audio_file:'',
                    currentconverationid:res.data.currentconverationid as string,
                    from:'Ai',
                    instanceid:res.data.instanceid as string,
                    message_key:'',
                    text:res.data.answer,
                    additinalData:additinalDataResolves
                }
            ])
            setchatLoading(false)
            setAdditinalDataResolved([])
        })    

        setText('')    

    }
    const [, forceUpdate] = useReducer(x => x + 1, 0);
    useConstructor(() => {
        subscribe('changeKeywords',() => {
            console.log('changeKeywords')
            forceUpdate()
        })        
    })
    const getRefrencess =(selectChat:ChatType) => {
        const testApi = new TestPage()
        testApi.relatedNodes({
            apikey: apikey,
            current_conversation_id:selectChat.currentconverationid,
            instanceid:selectChat.instanceid            
        },(res) => {
            if(res.data != 'No valid related_nodes found'){
                setRelatedNotes(res.data)
                setShowRefrencessModal(true)
            }
        })
    }
    const catkeywords= useRef<Array<any>>([])
    // const [catKey,setcatKey] = useState<Array<any>>([])
    const getCatKeywords = () => {
        if(catkeywords.current){
            return  catkeywords.current   
        }else {
            return []
        }
    }

    return (
        <>
        <div className="w-[100%] relative">
            <SigmaContainer style={{ height: "100vh", width: "100%" }}>
                <GraphDefault  catkeyword={catkeywords} exeNods={exeNods}></GraphDefault>
                {/* <LoadGraph /> */}
            <ControlsContainer position={"bottom-right"}>
                <ZoomControl />
                <FullScreenControl />
                {/* <LayoutForceAtlas2Control  autoRunFor={8000} settings={{ settings: { slowDown: 10 } }} /> */}
            </ControlsContainer>
            <ControlsContainer position={"top-right"}>
                <SearchControl style={{ width: "200px" }} />
            </ControlsContainer>      
                
            </SigmaContainer>
            {getCatKeywords().length > 0 ?
                <div style={{resize:'both'}}  className="bg-white resize-x absolute p-4 overflow-y-scroll overflow-x-hidden border rounded-md w-[340px] chatBoxScroolBar h-[250px] shadow-lg left-6 top-8">
                    {getCatKeywords().map((item) => {
                        return (
                            <>
                                <div className="text-[12px] text-slate-700 leading-relaxed font-poppins mb-10">
                                   <div className="flex items-center justify-between">
                                        <div className="text-[10px] text-slate-500">{Object.keys(item)[0].substring(0, 45)}</div>
                                        {item[Object.keys(item)[0]][1].page_numbers.length> 0?
                                            <div className="text-[10px] text-slate-500"> pages: {item[Object.keys(item)[0]][1].page_numbers.length> 0?item[Object.keys(item)[0]][1].page_numbers: ''}</div>
                                        :undefined}
                                   </div>
                                    <div className="my-2 ml-2 border p-1 overflow-x-hidden h-20 chatBoxScroolBar overflow-y-scroll">
                                        {item[Object.keys(item)[0]][0].text}
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
            :undefined}
            <div className="absolute bottom-14 left-6">
                <AdditinalBox isLoading={chatLoading} getRefrences={getRefrencess} chats={chats} sendToApi={sendToApi} additinalDataResolves={additinalDataResolves} setAdditinalDataResolved={setAdditinalDataResolved} additinalData={additinalData} setAditinalData={setAditinalData}></AdditinalBox>
            </div>

            <div className="absolute top-12 right-6">
                <FilterBox exeNods={exeNods} setexeNods={setexeNods}></FilterBox>
            </div>
            {/* <div className="absolute bottom-14 left-6">
                <ReferenceBox></ReferenceBox>
                <ChatBox getRefrences={getRefrencess} sendToApi={sendToApi} text={text} setText={setText} chats={chats} setAditinalData={setAditinalData} openAdditinalData={setShowAdditinalModal}></ChatBox>
            </div> */}
            <AddAditinalData additinalDataResolves={additinalDataResolves} setAdditinalDataResolved={setAdditinalDataResolved} sendToApi={sendToApi} data={additinalData} isOpen={showAdditinalModal} onClose={() =>{setShowAdditinalModal(false)}}></AddAditinalData>
            <RefrencessData relatedNodes={relatedNotes} onClose={() => {
                setShowRefrencessModal(false)
            }} isOpen={showRefrencessModal}></RefrencessData>
        </div> 
        </>
    )
}

export default MedicalCopilot