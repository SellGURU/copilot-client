import { createHashRouter } from "react-router-dom";
import { Panel } from "../pages";
import MedicalCopilot from "../pages/MedicalCopilot";

const router = createHashRouter([
    {
        path:'/',
        element:<Panel></Panel>,
        children:[
            {
                path:'/',
                element:<MedicalCopilot></MedicalCopilot>
            },
            // {
            //     path:'Overview',
            //     element:<Overview></Overview>
            // },
            // {
            //     path:'Risks',
            //     element:<Risks></Risks>
            // },
            // {
            //     path:'Interventions',
            //     element:<Interventions></Interventions>
            // }

        ]
    }
])

export default router