import { ControlsContainer, FullScreenControl, SearchControl, SigmaContainer, ZoomControl } from "@react-sigma/core"
import { GraphDefault } from "../../components/GraphSubComponents/Graph"
import { LayoutForceAtlas2Control } from "@react-sigma/layout-forceatlas2"
import { ChatBox } from "../../components"

const MedicalCopilot = () => {
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
                <ChatBox></ChatBox>
            </div>
        </div> 
        </>
    )
}

export default MedicalCopilot