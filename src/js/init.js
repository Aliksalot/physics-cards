const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')

//window.addEventListener('click', mouseUp)
//window.addEventListener('keydown', keyDown)

setInterval(draw, 100)
setInterval(update, 700)

start()
