const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')

const resize = () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
}


//canvas.addEventListener('mousedown', mousedown)
window.addEventListener('mouseup', mouseup)
canvas.addEventListener('wheel', magnifyOnScroll)
canvas.addEventListener('mousedown', mousedown)

window.addEventListener('keydown', keydown)
window.addEventListener('mousemove', mousemove)

resize()
setInterval(draw, 10)
setInterval(update, 700)

start()
