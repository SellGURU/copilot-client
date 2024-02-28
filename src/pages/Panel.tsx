import React from "react"
import { SideMenu } from "../components"
import { Outlet } from "react-router-dom"
import Main from "../components/Main/Main"
// import GraphEvents from "../components/GraphSubComponents/GraphEnent"

const Panel:React.FC = () => {
    return (
        <>
            <SideMenu></SideMenu>
            <Outlet></Outlet>
            <Main/>           
        </>
    )
}

export default Panel