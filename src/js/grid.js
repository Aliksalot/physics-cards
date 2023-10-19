const max_size = 1000
const min_size = 60
const step = 15
const start_size = 500
const aspect_ratio = 0.5

class Grid{

    constructor(){
        this.width = 100
        this.height = 100
        //in pixels
        this.nodeWidth = start_size
        this.nodeHeight = aspect_ratio * start_size
        this.self = []

        for(let i = 0; i < this.width; i ++){
            this.self.push([])
            for(let j = 0; j < this.height; j++) {
                this.self[i].push({hasNode: false})
            }
        }
        
    }

    hasNeighbour(x,y){
        //ifs are for border cases
        let result = false

        if(x - 1 >= 0 && this.self[x - 1][y].hasNode)
            result = this.self[x - 1][y].hasNode
        
        if(x + 1 < this.width && this.self[x + 1][y].hasNode)
            result = this.self[x + 1][y].hasNode 
        
        if(y + 1 < this.height && this.self[x][y + 1].hasNode)
            result = this.self[x][y + 1].hasNode
        
        if(y - 1 >= 0 && this.self[x][y - 1].hasNode)
            result = this.self[x][y - 1].hasNode

        return result

    }

    placeNode(x, y, node){
        if(this.self[x][y].hasNode || !this.hasNeighbour(x, y)){
            return
        }

        this.self[x][y].hasNode = true
        this.self[x][y].node = node
    }

    magnify(){
        if(this.nodeWidth + step > max_size)
            return

        this.nodeWidth += step
        this.nodeHeight = aspect_ratio * this.nodeWidth
    }

    unmagnify(){
        if(this.nodeWidth - step < min_size)
            return
        this.nodeWidth -= step
        this.nodeHeight = aspect_ratio * this.nodeWidth
    }

}