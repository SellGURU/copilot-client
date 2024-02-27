import { useState } from 'react';
import './SideMenu.css';
import { useNavigate } from 'react-router-dom';

interface SideMenuItem  {
    title:string
    src:string
    path:string
}

const SideMenu = () => {
    const [clickedItem, setClickedItem] = useState<SideMenuItem>();
    const navigate = useNavigate()
    const sideMenuItems:Array<SideMenuItem>=[ 
        {title:"Overview" , src:"./icons/Overview.svg" , path:'/'},
        {title:"Risks" , src:"./icons/Risks.svg " , path:'/'},
        {title:"Interventions" , src:"./icons/Interventions.svg " , path:'/' },
        {title:"Biomarkers" , src:"./icons/Biomarkers.svg " , path:'/' },
        {title:"Medical Copilot" , src:"./icons/MedicalCopilot.svg " , path:'/MedicalCopilot' },
        {title:"About" , src:"./icons/About.svg " , path:'/' },
    ];
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