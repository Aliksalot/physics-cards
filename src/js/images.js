const images_field = document.getElementsByClassName('footer-images')[0];

const pixels = parseInt(window.innerWidth / 4)
const total_image_count = 28
let footer_images = []

function moveLeft() {
    const images = images_field.querySelectorAll('.image');

    const last_image = images[images.length - 1]

    if (last_image.getBoundingClientRect().left <= window.innerWidth) return;

    images.forEach((image) => {
        const currentLeft = parseInt(image.style.left) || 0;
        image.style.left = `${currentLeft - pixels}px`;
    })
}

function moveRight() {
    const images = images_field.querySelectorAll('.image');

    const first_image = images[0]
  
    if (first_image.getBoundingClientRect().left >= 0) return;

    images.forEach((image) => {
        const currentRight = parseFloat(image.style.left) || 0;
        image.style.left = `${currentRight + pixels}px`;
    })
}

function removePopup(){
  const popupImageContainer = document.querySelector('.popup-image-container');
  if (popupImageContainer) {
    popupImageContainer.remove();
  }
}

function showOnHover(num){
    if(user_node !== undefined)
      return

    closeAuthorsPopUp()
    const popupImage = document.createElement('img');
    popupImage.src = `images/${num}.jpg`;
    popupImage.alt = `${num}.jpg`;
    popupImage.classList.add('popup-image');

    const popupImageContainer = document.createElement('div');
    popupImageContainer.classList.add('popup-image-container');
    popupImageContainer.appendChild(popupImage);


    document.body.appendChild(popupImageContainer);
}

function createImage(num, className) {
  const image = document.createElement('img');
  image.id = num;
  image.src = `images/${num}.jpg`;
  image.alt = `${num}.jpg`;
  image.draggable = false;

  image.classList.add(className);

  image.addEventListener('mouseover', () => {
      showOnHover(num)
  });

  image.addEventListener('mouseout', () => {
    removePopup()
  });

  image.addEventListener('mousedown', () => {
      createNodeOnMouse(num)
      removePopup()
  })

  return image;
}

function appendImage(id){
    /*let images = Array.from(images_field.children)
    let insertPos = 0
    while(insertPos < images.length && images[insertPos].id < id){
      insertPos ++
    }
    if(insertPos === images.length){
        images_field.appendChild(createImage(id, 'image'))
        return
    }
    
    images_field.insertBefore(createImage(id, 'image'), images[insertPos])*/

    let insertPos = 0
    while(insertPos < footer_images.length && footer_images[insertPos] < id){
        insertPos ++
    }

    footer_images.splice(insertPos, 0, id)
    reload()
}

function popImage(id){
    const buffer = footer_images.filter(_id => _id !== id)
    footer_images = buffer
    reload()
}

function reload(){

    removePopup()
    while(images_field.firstChild)
      images_field.removeChild(images_field.firstChild)

    footer_images.forEach(image_id => {
      images_field.appendChild(createImage(image_id, 'image'))
    })
}



for (let i=2; i <= total_image_count; i++){
    images_field.appendChild(createImage(i, 'image'))
    footer_images.push(i)
}

