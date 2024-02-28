/* eslint-disable @typescript-eslint/no-explicit-any */
import { ControlsContainer, FullScreenControl, SearchControl, SigmaContainer, ZoomControl } from "@react-sigma/core"
import { GraphDefault } from "../../components/GraphSubComponents/Graph"
import { LayoutForceAtlas2Control } from "@react-sigma/layout-forceatlas2"
import { AddAditinalData, ChatBox, ReferenceBox } from "../../components"
import { useState } from "react"

const MedicalCopilot = () => {
    const [showAdditinalModal,setShowAdditinalModal] = useState(false)
    const [additinalData, setAditinalData] = useState<any>({});
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
                <ChatBox setAditinalData={setAditinalData} openAdditinalData={setShowAdditinalModal}></ChatBox>
            </div>
            <AddAditinalData data={additinalData} isOpen={showAdditinalModal} onClose={() =>{setShowAdditinalModal(false)}}></AddAditinalData>
        </div> 
        </>
    )
}

export default MedicalCopilot