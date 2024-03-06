import React from "react"
import "./InterventionsCards.css"

interface InterventionsCardsProps  {
    cardTitle:string;
    cardDescription:string;
    cardTags:Array<string>;
}

const InterventionsCards:React.FC<InterventionsCardsProps> = ({cardTitle, cardDescription, cardTags}) => {
    return (
        <>
        <div className="InterventionsCards-Container">
            <p className="InterventionsCards-Container-CardTitle">{cardTitle}</p>
            <p className="InterventionsCards-Container-CardDescription">{cardDescription}</p>
            <div className="InterventionsCards-Container-CardTagsSection">
                {
                    cardTags.map((tag) => {
                        return <div className="InterventionsCards-Container-CardTags ">
                            {tag}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-[21px] h-[13px]">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181" />
                            </svg>
{/* 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-[21px] h-[13px]">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                            </svg> */}
                      </div>
                    })
                }
                {/* <div className="InterventionsCards-Container-CardTags">{cardTags}</div> */}
            </div>
        </div>
        </>
    )
}
export default InterventionsCards