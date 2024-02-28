/* eslint-disable @typescript-eslint/no-explicit-any */
import TestPage from '../../api/TestPage';
import './index.css'

interface ChatBoxProps {
    openAdditinalData:(action:boolean) =>void
    setAditinalData:(additinalData:any) =>void
}

const ChatBox:React.FC<ChatBoxProps> = ({openAdditinalData,setAditinalData}) => {
    const getAdditionalData = () => {
        TestPage.additinalData(
            { botid: '7b53073af5' },
            (res) => {
            if (res.data.additional_data) {
                setAditinalData(res.data.additional_data);
                openAdditinalData(true)
            }
            if (res.data.additional_data == null) { /* empty */ }
            }
        );        
    }
    return (
        <div className="w-[313px] relative px-3 h-[427px] border border-[#F0F0F0] shadow-md  bg-white rounded-[20px]">
            <div className="w-full  absolute left-0 bottom-3 px-3  ">
                <div className="border border-[#E9EDF5] flex justify-between items-center px-1 py-1 h-10 rounded-[12px]">
                    <input className="h-full outline-none text-[#3C3744] px-2 w-[250px] placeholder:text-[#3C3744] placeholder:opacity-40 text-xs font-light" placeholder="Type your message..." type="text" />
                    <div onClick={() => {
                        getAdditionalData()
                        
                    }} className="w-8 h-8 flex justify-center items-center bg-[#6432C9] rounded-full cursor-pointer">
                        <img className="mr-[2px]" src="./icons/fi_send.svg" alt="" />
                    </div>
                </div>
            </div>

            <div className="mt-4 chatBoxScroolBar overflow-y-scroll h-[350px] pb-[100px]">
                <div className="bg-[#6432C933] max-w-[247px] rounded-[18px] rounded-tl-[0px] p-5 pt-4 text-xs leading-5 text-[#1A202C]">
                    Educate your patient about the importance of good sleep hygiene. This includes maintaining a consistent sleep schedule, creating a relaxing bedtime routine, and ensuring the sleep environment is comfortable and conducive to sleep.
                    Remember to approach the situation with empathy, understanding, and patience. It may take time to find the right combination of strategies to improve your patient's sleep, but with persistence and support, positive outcomes are possible.                    
                </div>
            </div>
        </div>
    )
}

export default ChatBox