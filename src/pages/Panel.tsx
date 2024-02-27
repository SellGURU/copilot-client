import React from "react"
import { SideMenu } from "../components"
import { Outlet } from "react-router-dom"
import { ControlsContainer, FullScreenControl, SearchControl, SigmaContainer, ZoomControl } from "@react-sigma/core"
import { LayoutForceAtlas2Control } from "@react-sigma/layout-forceatlas2"
import { GraphDefault } from "../components/GraphSubComponents/Graph"
// import GraphEvents from "../components/GraphSubComponents/GraphEnent"

const Panel:React.FC = () => {
    return (
        <>
            <SideMenu></SideMenu>
            <div className="w-[100%]">
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
            </div>            
            <Outlet></Outlet>
        </>
    )
}

export default Panel