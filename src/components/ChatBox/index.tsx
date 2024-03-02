/* eslint-disable @typescript-eslint/no-explicit-any */
import TestPage from '../../api/TestPage';
import { ChatType } from '../../types';
import './index.css'

interface ChatBoxProps {
    openAdditinalData:(action:boolean) =>void
    setAditinalData:(additinalData:any) =>void
    chats:Array<ChatType>
    text:string
    setText:(text:string) => void
    sendToApi :(additinal?:any) => void
    getRefrences: (chat:ChatType) => void
}

const ChatBox:React.FC<ChatBoxProps> = ({
    openAdditinalData,sendToApi,
    setAditinalData,chats,text,setText,getRefrences}) => {
    const testPageApi = new TestPage()
    const getAdditionalData = () => {
        testPageApi.additinalData(
            { botid: '7b53073af5' },
            (res) => {
            if (res.data.additional_data) {
                setAditinalData(res.data.additional_data);
                openAdditinalData(true)
            }
            if (res.data.additional_data == null) {
                sendToApi()
             }
            }
        );        
    }
    return (
        <div className="w-[313px] relative px-3 h-[427px] border border-[#F0F0F0] shadow-md  bg-white rounded-[20px]">
            <div className="w-full  absolute left-0 bottom-3 px-3  ">
                <div className="border border-[#E9EDF5] flex justify-between items-center px-1 py-1 h-10 rounded-[12px]">
                    <input value={text} onChange={(event)=>setText(event.target.value)} className="h-full outline-none text-[#3C3744] px-2 w-[250px] placeholder:text-[#3C3744] placeholder:opacity-40 text-xs font-light" placeholder="Type your message..." type="text" />
                    <div onClick={() => {
                        if(chats.length == 0){
                            getAdditionalData()
                        }else{
                            sendToApi()
                        }
                        
                    }} className="w-8 h-8 flex justify-center items-center bg-[#6432C9] rounded-full cursor-pointer">
                        <img className="mr-[2px]" src="./icons/fi_send.svg" alt="" />
                    </div>
                </div>
            </div>

            <div className="mt-4 chatBoxScroolBar overflow-y-scroll h-[350px] pb-[100px]">
                {chats.map((item:ChatType) => {
                    return (
                        <>
                        {item.from == 'Ai' ?
                        <div className='flex w-full'>
                            <div className="bg-[#6432C933] max-w-[247px] rounded-[18px] rounded-tl-[0px] p-5 pt-4 text-xs leading-5 text-[#1A202C]">
                                {item.text}
                            </div>
                            <div className='ml-1'>
                                <img onClick={() => {
                                    getRefrences(item)
                                }
                                    } className='cursor-pointer' src="./icons/refIcon.svg" alt="" />
                            </div>
                        </div>
                        :
                        <div className=" max-w-[247px] rounded-[18px] rounded-tl-[0px] p-5 pt-4 text-xs leading-5 text-[#1A202C]">
                            {item.text}
                        </div>                        
                        }
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default ChatBox