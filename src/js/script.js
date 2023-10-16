const grid = new Grid()

grid.self[3][3].hasNode = true
grid.self[3][3].node = new _Node(-1)

function draw (){
    const width = grid.width
    const height = grid.height
    for(let i = 0; i < width; i ++){
        for(let j = 0; j < height; j ++){
            
            if(grid.self[i][j].hasNode){
                context.fillStyle = 'black'
            }else{
                context.fillStyle = 'white'
                if(i % 2 === 0 && j % 2 === 0){
                    context.fillStyle = 'lightblue'
                }
                if(i % 2 !== 0 && j % 2 !== 0){
                    context.fillStyle = 'lightblue'
                }
                if(!grid.self[i][j].hasNode && grid.hasNeighbour(i, j))
                    context.fillStyle = 'lightgray'
                
            }
            
            context.fillRect(i * grid.nodeWidth, j * grid.nodeHeight, grid.nodeWidth, grid.nodeWidth)
        }
    }
}

function start() {
    //real
}

function mouseup(event) {
    const x = (event.clientX - event.clientX % grid.nodeWidth) / grid.nodeWidth

    const verticalOffset = parseFloat(window.getComputedStyle(document.getElementById('canvas')).top);
    const offsetY = Math.floor(event.clientY - verticalOffset)
    const y = (offsetY - offsetY % grid.nodeHeight) / grid.nodeHeight
    console.log(offsetY, verticalOffset, y)
    grid.placeNode(x,y, new _Node(-1))

}

function mousedown(event) {
    console.log('asd', event)


}

function update() {

}