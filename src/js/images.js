const images_field = document.getElementsByClassName('footer-images')[0];

const pixels = parseInt(window.innerWidth / 4)

function moveLeft() {
    const images = images_field.querySelectorAll('.image');
    let images_width = 0

    images.forEach((image) => {
        images_width += image.width + parseFloat(window.getComputedStyle(image).getPropertyValue('margin-left'))
    })

    const last_image = images[images.length - 1]

    if (parseFloat(last_image.style.left) + images_width < window.innerWidth) return;

    images.forEach((image) => {
        const currentLeft = parseInt(image.style.left) || 0;
        image.style.left = `${currentLeft - pixels}px`;
    })
}

function moveRight() {
    const images = images_field.querySelectorAll('.image');

    const last_image = images[images.length - 1]

    if (parseFloat(last_image.style.left) >= 0 || last_image.style.left === '') return;

    images.forEach((image) => {
        const currentRight = parseFloat(image.style.left) || 0;
        image.style.left = `${currentRight + pixels}px`;
    })
}

function createImage(num, className) {
  const image = document.createElement('img');
  image.id = num;
  image.src = `images/${num}.jpg`;
  image.alt = `${num}.jpg`;

  image.classList.add(className);

  image.addEventListener('mouseover', () => {
    const popupImage = document.createElement('img');
    popupImage.src = `images/${num}.jpg`;
    popupImage.alt = `${num}.jpg`;
    popupImage.classList.add('popup-image');

    const popupImageContainer = document.createElement('div');
    popupImageContainer.classList.add('popup-image-container');
    popupImageContainer.appendChild(popupImage);


    document.body.appendChild(popupImageContainer);
  });

  image.addEventListener('mouseout', () => {
    const popupImageContainer = document.querySelector('.popup-image-container');
    if (popupImageContainer) {
      popupImageContainer.remove();
    }
  });

  return image;
}


function appendImage(i){
    images_field.appendChild(createImage(i, 'image'))
}

function popImage(i){
    images_field.removeChild(document.getElementById(i))
}

const image_count = 28

for (let i=1; i <= image_count; i++)
    appendImage(i)

