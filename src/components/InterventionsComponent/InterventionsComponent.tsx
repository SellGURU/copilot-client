import React from "react"
import Navbar from "../Navbar/Navbar"
import "./InterventionsComponent.css"
import InterventionsCards from "../InterventionsCards/InterventionsCards";

interface InterventionsComponentProps {
    theme?:string;
}
const InterventionsComponent:React.FC<InterventionsComponentProps> = ({}) => {
    return (
        <>
        <div className="Interventions-Container">
            <Navbar/>
            <div className="Interventions-Section">
                <div className="Interventions-Section-Left">
                    <div className="Interventions-Section-Left-Card shadow-card">
                        <InterventionsCards cardTitle="Walking" cardDescription="Walk for at least half an hour every day"/>
                        <InterventionsCards cardTitle="Meditate" cardDescription="Meditate 3 times a week"/>
                        <InterventionsCards cardTitle="Moderate Carbs intake" cardDescription="Up to 3 portions of carbs a day"/>
                        <InterventionsCards cardTitle="Drink Water" cardDescription="Drink water at least 8 glasses in a day"/>
                        <InterventionsCards cardTitle="Eat Vegetables" cardDescription="Meditate 3 times a week"/>
                    </div>
                </div>
                <div className="Interventions-Section-Right">
                    <img src="./icons/InterventionsPictures.svg" alt="" />
                </div>
            </div>
        </div>        
        </>
    )
}
export default InterventionsComponent

