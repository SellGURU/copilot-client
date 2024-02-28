import { createHashRouter } from "react-router-dom";
import { Overview, Panel } from "../pages";
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
            }            
        ]
    }
])

export default router