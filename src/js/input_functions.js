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
    grid.placeNode(x,y, user_node)
    user_node = undefined
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
        case 37:
            if(x_offset_draw - 1 < -(grid.width - 15))
                return
            x_offset_draw --
            break;
        //up
        case 38:
            if(y_offset_draw - 1 < -(grid.height - 10))
                return
            y_offset_draw --
            break;
        //right
        case 39:
            if(x_offset_draw + 1 > 0)
                return
            x_offset_draw ++
            break;
        //down
        case 40:
            if(y_offset_draw + 1 > 0)
                return
            y_offset_draw ++
            break;
    }
}