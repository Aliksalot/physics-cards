const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')

const resize = () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
}


canvas.addEventListener('mousedown', mousedown)
canvas.addEventListener('mouseup', mouseup)
//window.addEventListener('keydown', keyDown)

resize()
setInterval(draw, 100)
setInterval(update, 700)

start()
