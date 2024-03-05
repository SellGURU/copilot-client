import React from "react";
import Navbar from "../Navbar/Navbar"
import RisksCards from "../RisksCards/RisksCards"
import "./RisksComponent.css"


interface RisksComponentProps {
    theme?:string;
}

const RisksComponent:React.FC<RisksComponentProps> = ({}) => {

    return (
        <>
        <div className="Risks-Container">
            <Navbar/>
            <div className="Risks-Section">
                <div className="Risks-Section-Left">
                    <RisksCards cardTitle="Diabetes" pieChartTitle="Risk Level" lineChartTitle="Glucose Trends" lineChartSubTitle="(mg/dl)" percentage={75}></RisksCards>
                    <RisksCards cardTitle="Heart Disease" pieChartTitle="Risk Level" lineChartTitle="Total Cardiovascular" percentage={65}></RisksCards>
                    <RisksCards cardTitle="blood pressure" pieChartTitle="Risk Level" lineChartTitle="Total Blood Pressure" percentage={91}></RisksCards>
                </div>
                <div className="Risks-Section-Right">
                    <div className="Risks-Section-Right-Info">
                        <p className="Risks-Section-Right-Info-Title">Risk Level</p>
                        <div className=" Risks-Section-Right-Info-GuideSection">
                            <div className="Risks-Section-Right-Info-Guide">
                                <span className="Risks-Section-Right-Info-Guide-Point Risks-RedPoint"></span>
                                <p>Priorities</p>
                            </div>
                            <div className="Risks-Section-Right-Info-Guide">
                                <span className="Risks-Section-Right-Info-Guide-Point Risks-PurplePoint"></span>
                                <p>Medium</p>
                            </div>
                            <div className="Risks-Section-Right-Info-Guide">
                                <span className="Risks-Section-Right-Info-Guide-Point Risks-OrangePoint"></span>
                                <p>High</p>
                            </div>
                            <div className="Risks-Section-Right-Info-Guide">
                                <span className="Risks-Section-Right-Info-Guide-Point Risks-BluePoint"></span>
                                <p>Low</p>
                            </div>
                        </div>
                    </div>
                    <div className="Risks-Section-Right-Person">
                        <img src="./icons/RisksModel.svg" alt="Person" />
                    </div>
                    <div className="grid grid-cols-2 grid-flow-row gap-y-11 gap-x-40">
                        <div className="Risks-Section-Right-Items">
                            <div className="Risks-Section-Right-BackgoundCircle outer-circle">
                                <div className="Risks-Section-Right-Circle inner-circle">
                                    <img src="./icons/Diabetes.svg" className="w-6 h-6" alt="Diabetes" />
                                </div>
                            </div>
                            <p className="Risks-Section-Right-Items-Title">Diabetes</p>
                        </div>
                        <div className="Risks-Section-Right-Items">
                            <div className="Risks-Section-Right-BackgoundCircle outer-circle">
                                <div className="Risks-Section-Right-Circle inner-circle">
                                    <img src="./icons/HeartDisease.svg" className="w-6 h-6" alt="HeartDisease" />
                                </div>
                            </div>
                            <p className="Risks-Section-Right-Items-Title">Heart Disease</p>
                        </div>
                        <div className="Risks-Section-Right-Items me-[100px]">
                            <div className="Risks-Section-Right-BackgoundCircle outer-circle">
                                <div className="Risks-Section-Right-Circle inner-circle">
                                    <img src="./icons/BloodPressure.svg" className="w-6 h-6" alt="BloodPressure" />
                                </div>
                            </div>
                            <p className="Risks-Section-Right-Items-Title">Blood Pressure</p>
                        </div>
                        <div className="Risks-Section-Right-Items ms-[100px]">
                            <div className="Risks-Section-Right-BackgoundCircle outer-circle">
                                <div className="Risks-Section-Right-Circle inner-circle">
                                    <img src="./icons/Dementia.svg" className="w-6 h-6" alt="Dementia" />
                                </div>
                            </div>
                            <p className="Risks-Section-Right-Items-Title">Dementia</p>
                        </div>
                        <div className="Risks-Section-Right-Items me-10">
                            <div className="Risks-Section-Right-BackgoundCircle outer-circle">
                                <div className="Risks-Section-Right-Circle inner-circle">
                                    <img src="./icons/InfectiousDisease.svg" className="w-6 h-6" alt="InfectiousDisease" />
                                </div>
                            </div>
                            <p className="Risks-Section-Right-Items-Title">Infectious Disease</p>
                        </div>
                        <div className="Risks-Section-Right-Items ms-2">
                            <div className="Risks-Section-Right-BackgoundCircle outer-circle">
                                <div className="Risks-Section-Right-Circle inner-circle">
                                    <img src="./icons/Mentalillness.svg" className="w-6 h-6" alt="Mentalillness" />
                                </div>
                            </div>
                            <p className="Risks-Section-Right-Items-Title">Mental illness</p>
                        </div>

                    </div>

                </div>
            </div>
        </div>        
        </>
    )
}
export default RisksComponent

