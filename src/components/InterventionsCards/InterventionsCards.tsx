import React from "react"
import "./InterventionsCards.css"

interface InterventionsCardsProps  {
    cardTitle:string;
    cardDescription:string;

}

const InterventionsCards:React.FC<InterventionsCardsProps> = ({cardTitle, cardDescription}) => {
    return (
        <>
        <div className="InterventionsCards-Container">
            <p className="InterventionsCards-Container-CardTitle">{cardTitle}</p>
            <p className="InterventionsCards-Container-CardDescription">{cardDescription}</p>
            <div className="InterventionsCards-Container-ChartsSection">
               

            </div>
        </div>
        </>
    )
}
export default InterventionsCards