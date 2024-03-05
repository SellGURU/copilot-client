/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from "react-toastify";
import Api from "./Api";

class FlowTest extends Api {
    constructor(){
        super();
        this.base = 'copilot'
    }
    flow(data:any,submit:(res:any) => void) {
        this.post('/flow',data).then(res => {
            submit(res)
        })
    }    
    likeDislike(data:any,submit:(res:any) => void){
        this.post('/status_for_test',data).then(res => {
            submit(res)
        }).catch((err) => {
            toast.dismiss()
            toast.error(err.message)
        })
    }    
}
export default FlowTest