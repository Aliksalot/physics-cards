function magnify(){
    grid.magnify()
}

function unmagnify(){
    grid.unmagnify()
}   


function mouseup(event) {
    if(user_node === undefined)
        return
    const x = (event.clientX - event.clientX % grid.nodeWidth - x_offset_draw * grid.nodeWidth) / grid.nodeWidth

    const verticalOffset = parseFloat(window.getComputedStyle(document.getElementById('canvas')).top);
    const offsetY = Math.floor(event.clientY - verticalOffset)
    const y = (offsetY - offsetY % grid.nodeHeight - y_offset_draw * grid.nodeHeight) / grid.nodeHeight

    if(grid.hasNeighbour(x,y) && !grid.self[x][y].hasNode){
        grid.placeNode(x,y, user_node)
    }else{
        appendImage(user_node.image_num)
    }
    
    closeAuthorsPopUp()

    user_node = undefined
}

function mousedown(event){
    console.log('mouse downing')
    closeAuthorsPopUp()
    const x = (event.clientX - event.clientX % grid.nodeWidth - x_offset_draw * grid.nodeWidth) / grid.nodeWidth
    const verticalOffset = parseFloat(window.getComputedStyle(document.getElementById('canvas')).top);
    const offsetY = Math.floor(event.clientY - verticalOffset)
    const y = (offsetY - offsetY % grid.nodeHeight - y_offset_draw * grid.nodeHeight) / grid.nodeHeight

   if(x == 55 && y == 53)
        return

   grid.self[x][y].hasNode = false
   createNodeOnMouse(grid.self[x][y].node.image_num)
   grid.self[x][y].node = undefined
   
}

function mousemove(event){
    mouseX = event.clientX
    mouseY = event.clientY - parseFloat(window.getComputedStyle(document.getElementById('canvas')).top);
}


function keydown(event){
    const key = event.keyCode
    console.log(key, x_offset_draw, y_offset_draw)
    switch(key){
        //left
        case 39:
            if(x_offset_draw - 1 < -(grid.width - 15))
                return
            x_offset_draw --
            break;
        //up
        case 40:
            if(y_offset_draw - 1 < -(grid.height - 10))
                return
            y_offset_draw --
            break;
        //right
        case 37:
            if(x_offset_draw + 1 > 0)
                return
            x_offset_draw ++
            break;
        //down
        case 38:
            if(y_offset_draw + 1 > 0)
                return
            y_offset_draw ++
            break;
    }
}

function magnifyOnScroll(event){
    event.preventDefault();

    const direction = event.deltaY < 0 ? 'u' : 'd'

    if(direction === 'u'){
        grid.magnify()
    }else{
        grid.unmagnify()
    }

    console.log('lolls')
}