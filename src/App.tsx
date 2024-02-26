/* eslint-disable @typescript-eslint/no-unused-vars */
import "@react-sigma/core/lib/react-sigma.min.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";

function App() {
  return (
    <>
    <div className="flex justify-between items-center" style={{width:'100%',height:'100vh' ,background:'white'}}>
        <RouterProvider router={router} />
    </div>
    </>
  )
}

export default App
