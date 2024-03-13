/* eslint-disable @typescript-eslint/no-explicit-any */
import { GetEdgeAndNodesType } from "../types";
import { publish } from "../utils/event";
import Api from "./Api";

class Nodes extends Api {
    constructor(){
        super();
        this.base = 'copilot'
    }

    getAllNodesAndEdges(resolve:(res:GetEdgeAndNodesType) => void){
     this.post('/get_nodes_edges',{}).then(res => {
        resolve(res.data)
     })   
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getCatagories(resolve:(res:any) => void){
        this.post('/get_category_list',{}).then(res => {
            resolve(res.data)
        })
    }

    getgraphKeyWord(key:string,resolve:(res:any) => void){
        this.post('/paragraph_keyword',{
            category:key
        }).then(res => {

            publish('changeKeywords',{})
            resolve(res.data)
        })
    }    
}

export default Nodes