import React from "react"
import "./RisksCards.css"
import PieChart from "../PieChart/PieChart";
import LineChart from "../LineChart/LineChart";

interface RisksCardsProps  {
    cardTitle:string;
    pieChartTitle:string;
    lineChartTitle:string;
    lineChartSubTitle?:string;
    percentage:number;
}

const RisksCards:React.FC<RisksCardsProps> = ({cardTitle, pieChartTitle ,lineChartTitle,lineChartSubTitle,percentage}) => {
    return (
        <>
        <div className="RisksCards-Container">
            <p className="RisksCards-Container-CardTitle">{cardTitle}</p>
            <div className="RisksCards-Container-ChartsSection">
                <div className="RisksCards-Container-ChartsSection-Chart">
                    <p className="RisksCards-Container-ChartsSection-TitleCharts">{pieChartTitle}</p>
                    <div className="w-40 h-40">
                        <PieChart percentage={percentage}/>
                    </div>

                </div>
                <div className="RisksCards-Container-ChartsSection-Chart">
                    <p className="RisksCards-Container-ChartsSection-TitleCharts">{lineChartTitle} 
                        <span className="RisksCards-Container-ChartsSection-SubTitleCharts"> {lineChartSubTitle}</span>
                    </p>
                    <div className="w-[300px] h-[192px]">
                        <LineChart percentage={percentage}/>
                    </div>
                </div>

            </div>

            
        </div>
        </>
    )
}
export default RisksCards