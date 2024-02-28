/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { toast } from "react-toastify";

class Api {
    protected static base:'portal'|'mobile' = 'portal'
    protected static base_url:string = 'https://vercel-backend-one-roan.vercel.app/'


    protected static post(url:string,data?:any) {
        toast.loading('pending ...')
        const response = axios.post(this.base_url+this.base+url,data,{
            headers:{
                'Authorization': 'Bearer '+ 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIwMTFiN2I5MjlhIiwiaWF0IjoxNzA5MTA4NTE2LCJuYmYiOjE3MDkxMDg1MTYsImp0aSI6IjI4YzdkNDg2LTFjMjAtNDFmMS05MjMzLTY5NzZkOTk0Mzk1NSIsImV4cCI6MTcwOTcxMzMxNiwidHlwZSI6ImFjY2VzcyIsImZyZXNoIjpmYWxzZX0.xU0lkb4zDXkmtJQ3ATTEv-SRUuaJPYV3xisNBH8zMUo' 
            }
        })
        return response
    }
}

export default Api;