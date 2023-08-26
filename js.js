let displayImage = document.getElementById("product-image");
const displayImages = ['images/image-product-1.jpg','images/image-product-2.jpg','images/image-product-3.jpg','images/image-product-4.jpg'];
let imgInd = 0;

const shoeQuantity = document.getElementById("shoe-quantity")
let shoeQuantityTracking= 0;

function nextImg() {
    imgInd = (imgInd+1)%4;
    displayImage.src = displayImages[imgInd];
    console.log(imgInd);
}

function prevImg() {
    if (imgInd!=0){
        displayImage.src = displayImages[--imgInd];
    }
    else{
        displayImage.src = displayImages[3];
        imgInd=3;
    }
    console.log(imgInd);
}

function addQuantity(){
    shoeQuantity.innerHTML = ++shoeQuantityTracking;
}

function minusQuantity(){
    if(shoeQuantityTracking!=0){
        shoeQuantity.innerHTML = --shoeQuantityTracking;
    }
}