/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { toast } from "react-toastify";

class Api {
    protected base:'portal'|'mobile'|'copilot' = 'copilot'
    protected base_url:string = 'https://vercel-backend-one-roan.vercel.app/'


    protected post(url:string,data?:any) {
        toast.loading('pending ...')
        const response = axios.post(this.base_url+this.base+url,data,{
            headers:{
                'Authorization': 'Bearer '+ 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyMWU1YzE4YmQ1IiwiaWF0IjoxNzA5MzcxODAxLCJuYmYiOjE3MDkzNzE4MDEsImp0aSI6ImViMGYwNDQ4LWFjNGMtNDI3NS1iZTEwLWEzYmY5YTViZWZlZSIsImV4cCI6MTcxOTczOTgwMSwidHlwZSI6ImFjY2VzcyIsImZyZXNoIjpmYWxzZX0.XnffNU8I4isqh7aJT7pePkWrWUMluIjV_N94-ZYZTPo' 
            }
        })
        return response
    }
}

export default Api;