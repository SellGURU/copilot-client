/* eslint-disable @typescript-eslint/no-explicit-any */
import Api from "./Api";

class TestPage extends Api{
    resolveApikey(data:getApikey,submit:(res:any) => void){
        this.post('/get_apikey_for_test',data).then(res => {
            submit(res)
        })
    }
    listSassions(data:getApikey,submit:(res:any) => void) {
        this.post('/show_session_list',data).then(res => {
            submit(res)
        })
    } 
    additinalData(submit:(res:any) => void) {
        this.post('/get_additional_data',{}).then(res => {
            submit(res)
        })
    }    
    showSelected(data:any,submit:(res:any) => void) {
        this.post('/show_selected_session_message',data).then(res => submit(res))
    }     
    relatedNodes(data:any,submit:(res:any) => void) {
        this.post('/get_related_nodes',data).then(res => {
            submit(res)
        })
    }

    deleteSasion(data:any,submit:(res:any) => void){
        this.post('/delete_session',data).then(res => {
            submit(res)
        })
    }

}

export default TestPage

type getApikey = {
    botid:string
}