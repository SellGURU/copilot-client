import { createHashRouter } from "react-router-dom";
import { Overview, Panel,Risks } from "../pages";
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
            }         
        ]
    }
])

export default router