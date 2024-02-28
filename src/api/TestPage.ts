/* eslint-disable @typescript-eslint/no-explicit-any */
import Api from "./Api";

class TestPage extends Api{
    static resolveApikey(data:getApikey,submit:(res:any) => void){
        this.post('/get_apikey_for_test',data).then(res => {
            submit(res)
        })
    }
    static listSassions(data:getApikey,submit:(res:any) => void) {
        this.post('/show_session_list',data).then(res => {
            submit(res)
        })
    } 
    static additinalData(data:getApikey,submit:(res:any) => void) {
        this.post('/get_additional_data_for_test',data).then(res => {
            submit(res)
        })
    }    
    static showSelected(data:any,submit:(res:any) => void) {
        this.post('/show_selected_session_message',data).then(res => submit(res))
    }     
    static relatedNodes(data:any,submit:(res:any) => void) {
        this.post('/get_related_nodes_for_test',data).then(res => {
            submit(res)
        })
    }

    static deleteSasion(data:any,submit:(res:any) => void){
        this.post('/delete_session',data).then(res => {
            submit(res)
        })
    }

}

export default TestPage

type getApikey = {
    botid:string
}