import { useState } from 'react';
import './SideMenu.css';

const SideMenu = () => {
    const [clickedItemIndex, setClickedItemIndex] = useState(null);
    const sideMenuItems=[ 
        {title:"Overview" , src:"./icons/Overview.svg" , },
        {title:"Risks" , src:"./icons/Risks.svg " , },
        {title:"Interventions" , src:"./icons/Interventions.svg " , },
        {title:"Biomarkers" , src:"./icons/Biomarkers.svg " , },
        {title:"Medical Copilot" , src:"./icons/MedicalCopilot.svg " , },
        {title:"About" , src:"./icons/About.svg " , },
    ];
    const handleClick = (index:any) => {
        setClickedItemIndex(index);
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
                            <div key={index} className="SideMenu-Items" onClick={() => handleClick(index)}>
                                <div className={clickedItemIndex === index ? 'SideMenu-Icons' : ''}>
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