import React from "react"
import Navbar from "../Navbar/Navbar"
import "./OverviewComponent.css"

interface OverviewComponentProps {
    theme?:string;
}
const OverviewComponent:React.FC<OverviewComponentProps> = ({}) => {
    return (
        <>
        <div className="Overview-Container">
            <Navbar/>
            <div className="Overview-Section">
                <div className="Overview-Section-Left">
                    <div className="Overview-Section-Left-BackgoundCircle outer-circle mt-28">
                        <div className="Overview-Section-Left-SubCircle inner-circle ">
                            <img src="./icons/sleep.svg" className="w-[46px] h-[46px]" alt="sleep" />
                            <p className="text-sm">Sleep</p>
                        </div>
                    </div>
                    <div className="w-60 h-60 Overview-Section-Left-BackgoundCircle outer-circle">
                        <div className="Overview-Section-Left-MainCircle inner-circle">
                            <img src="./icons/heart.svg" className="w-24 h-24" alt="heart" />
                            <p className="font-medium text-xl">Life-Style</p>
                        </div>
                    </div>
                    <div className="Overview-Section-Left-BackgoundCircle outer-circle mt-28">
                        <div className="Overview-Section-Left-SubCircle inner-circle ">
                            <img src="./icons/disease.svg" className="w-[46px] h-[46px]" alt="disease" />
                            <p className="text-sm">Disease</p>
                        </div>
                    </div>
                    <div className="Overview-Section-Left-BackgoundCircle outer-circle ms-36 mt-10">
                        <div className="Overview-Section-Left-SubCircle inner-circle ">
                            <img src="./icons/exercise.svg" className="w-[46px] h-[46px]" alt="exercise" />
                            <p className="text-sm">Exercise</p>
                        </div>
                    </div>
                    <div className="Overview-Section-Left-BackgoundCircle outer-circle -mb-[180px]">
                        <div className="Overview-Section-Left-SubCircle inner-circle ">
                            <img src="./icons/game.svg" className="w-[46px] h-[46px]" alt="game" />
                            <p className="text-sm">Game</p>
                        </div>
                    </div>
                    <div className="Overview-Section-Left-BackgoundCircle outer-circle me-36 mt-10">
                        <div className="Overview-Section-Left-SubCircle inner-circle ">
                            <img src="./icons/sunexposure.svg" className="w-[46px] h-[46px]" alt="sunexposure" />
                            <p className="text-sm">Sun Exposure</p>
                        </div>
                    </div>
                </div>
                <div className="Overview-Section-Right absolute bottom-0 right-0 top-[233px] ">
                    <img src="./icons/person.svg" alt="" />
                </div>
            </div>
        </div>        
        </>
    )
}
export default OverviewComponent

