import React from "react";
import { useState } from 'react';
import './SideMenu.css';
import { useNavigate } from 'react-router-dom';
import { SideMenuItem } from "../../types";
import { resolveMenuFromRoutes } from "../../help";

const SideMenu:React.FC = () => {
    const sideMenuItems:Array<SideMenuItem>=[ 
        {title:"Overview" , src:"./icons/Overview.svg" , path:'/overview'},
        {title:"Risks" , src:"./icons/Risks.svg " , path:'/risks'},
        {title:"Interventions" , src:"./icons/Interventions.svg " , path:'/interventions' },
        {title:"Biomarkers" , src:"./icons/Biomarkers.svg " , path:'/' },
        {title:"Medical Copilot" , src:"./icons/MedicalCopilot.svg " , path:'/MedicalCopilot' },
        {title:"About" , src:"./icons/About.svg " , path:'/' },
    ];
    const [clickedItem, setClickedItem] = useState<SideMenuItem>(resolveMenuFromRoutes(sideMenuItems));
    const navigate = useNavigate()
    const handleClick = (item:SideMenuItem) => {
        setClickedItem(item);
        navigate(item.path)
    };

    return (      
        <>
        <div className="SideMenu-Container">
            <div className="SideMenu-Section">
                <img className="" src={'./icons/icon.png'} alt="" />
                <div className="SideMenu-ItemsPart">
                    {sideMenuItems.map((item,index)=>{
                        return(
                            <>
                            <div key={index} className="SideMenu-Items" onClick={() => handleClick(item)}>
                                <div className={clickedItem?.title === item.title ? 'SideMenu-Icons' : ''}>
                                    <img className="m-2" src={item.src} alt=""  />
                                </div> 
                                {item.title}
                            </div>
                            </>
                        )
                    })}
                    <div className="SideMenu-Items SideMenu-Logout">
                        <div >
                            <img className="m-2" src="./icons/Logout.svg" alt=""  />
                        </div> 
                        Logout
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default SideMenu