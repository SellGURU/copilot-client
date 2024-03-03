import { GetEdgeAndNodesType } from "../types";
import Api from "./Api";

class Nodes extends Api {
    constructor(){
        super();
        this.base = 'portal'
    }

    getAllNodesAndEdges(resolve:(res:GetEdgeAndNodesType) => void){
     this.post('/get_nodes_edges').then(res => {
        resolve(res.data)
     })   
    }
}

export default Nodes