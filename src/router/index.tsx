import { createHashRouter } from "react-router-dom";
import { Panel } from "../pages";

const router = createHashRouter([
    {
        path:'/',
        element:<Panel></Panel>,
    }
])

export default router