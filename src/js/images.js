const images_field = document.getElementsByClassName('footer-images')[0]

const pixels = 200
let clicks = 0;

function moveLeft(){
    const images = images_field.querySelectorAll('.image')

    if (clicks >= 35)
        return

    images.forEach((image) => {
        const currentLeft = parseInt(image.style.left) || 0
        image.style.left = `${currentLeft - pixels}px`
      });

    clicks ++
}

function moveRight(){
    const images = images_field.querySelectorAll('.image')

    if (clicks <= 0)
        return

    images.forEach((image) => {
        const currentRight = parseFloat(image.style.left) || 0
        image.style.left = `${currentRight + pixels}px`
      });

    clicks --
}

function createImage(i, className){
    const image = document.createElement('img')

    image.id = i
    image.src = `images/${i}.jpg`
    image.alt = `${i}.jpg`
    image.draggable = false;
    image.onload = () => {console.log('adding event listener'); image.addEventListener('mousedown', () => {console.log(i)})}
    console.log(image)    
    image.classList.add('image');

    return image
}

const image_count = 28

for (let i=1; i <= image_count; i++)
    images_field.appendChild(createImage(i, 'image'))

