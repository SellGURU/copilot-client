import { createHashRouter } from "react-router-dom";
import { Panel } from "../pages";
import MedicalCopilot from "../pages/MedicalCopilot";

const router = createHashRouter([
    {
        path:'/',
        element:<Panel></Panel>,
        children:[
            {
                path:'MedicalCopilot',
                element:<MedicalCopilot></MedicalCopilot>
            }
        ]
    }
])

export default router