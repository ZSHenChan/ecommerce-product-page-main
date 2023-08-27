const menu = document.querySelector(".menu");
let displayImage = document.getElementById("product-image");
const displayImages = ['images/image-product-1.jpg','images/image-product-2.jpg','images/image-product-3.jpg','images/image-product-4.jpg'];
let imgInd = 0;
const numImgs = 4;

//tracking quantity to buy
const shoeQuantity = document.getElementById("shoe-quantity")
let shoeQuantityTracking= 0;

//tracking items in the cart
const cartQuantity = document.getElementById("cart-quantity");
let cart = {};
let cartQuantityTracking = 0;
const addItemsToCartConfirmationMessage = document.getElementById("add-items-to-cart-confirmation-message");

function menuBar(){
    if (menu.style.display=="none"){
        menu.style.display="block";
    }
    else{
        menu.style.display="none";
    }
}

//image switching
function nextImg() {
    imgInd = (imgInd+1)%numImgs;
    displayImage.src = displayImages[imgInd];
}
function prevImg() {
    if (imgInd!=0){
        displayImage.src = displayImages[--imgInd];
    }
    else{
        displayImage.src = displayImages[3];
        imgInd=3;
    }
}

//adjusting quantity
function addQuantity(){
    shoeQuantity.innerHTML = ++shoeQuantityTracking;
}
function minusQuantity(){
    if(shoeQuantityTracking!=0){
        shoeQuantity.innerHTML = --shoeQuantityTracking;
    }
}

//add items into cart
function addItemsToCart(){
    if (shoeQuantityTracking>0){
        cartQuantity.innerHTML=++cartQuantityTracking;
        cartQuantity.style.display="block";
        //clear quantity
        shoeQuantity.innerHTML = shoeQuantityTracking = 0;

        //show confirmation message
        addItemsToCartConfirmationMessage.style.zIndex = "1";
        addItemsToCartConfirmationMessage.classList.add("elementToFadeInAndOut");
        setTimeout(function(){addItemsToCartConfirmationMessage.classList.remove("elementToFadeInAndOut")},2000)
        addItemsToCartConfirmationMessage.style.zIndex = "-1";
        //edit dictionaries
    }
}