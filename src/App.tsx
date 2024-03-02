/* eslint-disable @typescript-eslint/no-unused-vars */
import "@react-sigma/core/lib/react-sigma.min.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useMoch } from "./api/--MOCH--";

function App() {
  useMoch()
  return (
    <>
    <div className="flex font-poppins justify-between items-center" style={{width:'100%',height:'100vh' ,background:'white'}}>
        <RouterProvider router={router} />
        <ToastContainer />
    </div>
    </>
  )
}

export default App
