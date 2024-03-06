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
                        <InterventionsCards cardTitle="Walking" cardDescription="Walk for at least half an hour every day" cardTags={["Activity", "Stress","Heart Age","Diabetes"]}/>
                        <InterventionsCards cardTitle="Meditate" cardDescription="Meditate 3 times a week" cardTags={["Stress","Heart Age","Diabetes","Nutrition"]}/>
                        <InterventionsCards cardTitle="Moderate Carbs intake" cardDescription="Up to 3 portions of carbs a day" cardTags={["Nutrition", "Diabetes","Heart Age","Sleep"]}/>
                        <InterventionsCards cardTitle="Drink Water" cardDescription="Drink water at least 8 glasses in a day" cardTags={["Heart Age","Nutrition","Stress","Diabetes"]}/>
                        <InterventionsCards cardTitle="Eat Vegetables" cardDescription="Meditate 3 times a week" cardTags={["Stress","Heart Age","Diabetes","Nutrition"]}/>
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

