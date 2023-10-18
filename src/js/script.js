const grid = new Grid()

grid.self[55][53].hasNode = true
const image = new Image()
image.src = `images/${1}.jpg`
grid.self[55][53].node = new _Node(image)
let x_offset_draw = -54
let y_offset_draw = -52

let mouseX = 0, mouseY = 0
let user_node = undefined;

function draw (){
    const width = grid.width
    const height = grid.height
    for(let i = 0; i < width; i ++){
        for(let j = 0; j < height; j ++){
            
            if(!grid.self[i][j].hasNode){
                context.fillStyle = 'lightgray'
                /*if(i % 2 === 0 && j % 2 === 0){
                    context.fillStyle = 'lightblue'
                }
                if(i % 2 !== 0 && j % 2 !== 0){
                    context.fillStyle = 'lightblue'
                }*/
                if(!grid.self[i][j].hasNode && grid.hasNeighbour(i, j)){
                    context.fillStyle = 'gray'
                }
                context.fillRect((i + x_offset_draw) * grid.nodeWidth , (j + y_offset_draw) * grid.nodeHeight, grid.nodeWidth, grid.nodeHeight)
            }else{
                context.fillStyle = 'black'
                context.drawImage(grid.self[i][j].node.image, (i + x_offset_draw) * grid.nodeWidth , (j + y_offset_draw) * grid.nodeHeight, grid.nodeWidth, grid.nodeHeight)
                    
                
            }
            
            
        }
    }
    if(user_node !== undefined){
        context.drawImage(user_node.image, mouseX - 0.5 * grid.nodeWidth, mouseY - 0.5 * grid.nodeHeight, grid.nodeWidth, grid.nodeHeight)
    }
        

}

function start() {
    //real
}

function createNodeOnMouse(img){
    console.log('creating user node')
    const image = new Image()
    image.src = `images/${img}.jpg`
    user_node = new _Node(image)
}


function update() {

}

