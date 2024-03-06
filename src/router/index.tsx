import { createHashRouter } from "react-router-dom";
import { Interventions, Overview, Panel,Risks } from "../pages";
import MedicalCopilot from "../pages/MedicalCopilot";

const router = createHashRouter([
    {
        path:'/',
        element:<Panel></Panel>,
        children:[
            {
                path:'MedicalCopilot',
                element:<MedicalCopilot></MedicalCopilot>
            },
            {
                path:'Overview',
                element:<Overview></Overview>
            },
            {
                path:'Risks',
                element:<Risks></Risks>
            },
            {
                path:'Interventions',
                element:<Interventions></Interventions>
            }

        ]
    }
])

export default router