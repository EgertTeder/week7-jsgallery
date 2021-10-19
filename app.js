const currentimage = document.querySelector("#image");

const images = ["images/pilt1.jpg", "images/pilt2.jpg", "images/pilt3.jpg"];

function changeImage() {
    
    let randomNumber = Math.floor(Math.random() * images.length);
    console.log(randomNumber);
    currentimage.src = images[randomNumber];
}