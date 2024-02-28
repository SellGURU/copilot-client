import axios from "axios";
import { toast } from "react-toastify";

axios.interceptors.response.use((response) => {
    if(response.status === 200) {
         toast.dismiss()
    }
    if(response.status ==401 || response.status ==498 || response.data.detail == 'Not enough segments'||response.data.detail == 'Signature has expired'){
        toast.warn("Signature has expired")
    }
    return response;
}, (error) => {
    toast.dismiss()
    setTimeout(() => {
        toast.error(error.message)
    }, 200);
    if (error.response && error.response.data) {
        return Promise.reject(error.response.data);
    }
    return Promise.reject(error.message);
});