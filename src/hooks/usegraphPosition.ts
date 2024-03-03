class Position {
    private xlayer1:number= 0
    private xlayer2:number = 0
    private xlayer3:number = 0
    private ylayer1:number = 0
    private ylayer2:number = 0
    private ylayer3:number = 0

    private r:number = 100
    private x_Cirvular: number = -100
    private calls : number = 0
    get Xlayer1 (){
        this.xlayer1 += 150
        return this.xlayer1
    }

    get Xlayer2 (){
        this.xlayer2 += 40
        return this.xlayer2
    }

    get Xlayer3 (){
        this.xlayer3 += 10
        return this.xlayer3
    }    

    get Ylayer1 (){
        return this.ylayer1
    }        

    get Ylayer2 (){
        this.ylayer2 += 40
        return this.ylayer2
    }    

    get Ylayer3 (){
        this.ylayer3 += 45
        return this.ylayer3
    }      

    get xCircular() {
        return this.x_Cirvular
    }
    get yCircular(){
        // this.x_Cirvular += 10
        if(this.calls > 200){
            this.r += 30
            this.calls = 0
            this.x_Cirvular = -100
        }
        this.calls ++
        if(this.calls % 2 == 0){
            this.x_Cirvular += 10
            return Math.sqrt(Math.pow(this.r,2)  - Math.pow(this.x_Cirvular,2))
        }
        return -Math.sqrt(Math.pow(this.r,2)  - Math.pow(this.x_Cirvular,2))
    }
} 

const useGraphPosition = () => {
    const position = new Position()

    return position
}

export default useGraphPosition