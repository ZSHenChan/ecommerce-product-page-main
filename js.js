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
const cartDetails = document.querySelector(".cart-top");
let cart = [];
let cartQuantityTracking = 0;
const addItemsToCartConfirmationMessage = document.getElementById("add-items-to-cart-confirmation-message");
const cartDetailsDisplay = document.querySelector(".cart-details");

const product = [
    {
        id: 1,
        image: 'images/image-product-1-thumbnail.jpg',
        title: 'Fall Limited Edition Sneakers',
        quantity: 0,
    }
]

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
    imgInd = (++imgInd)%numImgs;
    lightBoxdisplayImage.src = displayImages[imgInd];
}
function prevImg() {
    if (imgInd!=0){
        displaylightBoxdisplayImageImage.src = displayImages[--imgInd];
    }
    else{
        lightBoxdisplayImage.src = displayImages[3];
        imgInd=3;
    }
}
function displayImg(index){
    displayImage.src = displayImages[index];
}

//lightbox image switching
let lightBoxdisplayImage = document.getElementById("lightbox-product-image");
let lightboxImgInd = 0;

function lightboxNextImg() {
    lightboxImgInd = (++lightboxImgInd)%numImgs;
    lightBoxdisplayImage.src = displayImages[lightboxImgInd];
}
function lightboxPrevImg() {
    if (lightboxImgInd!=0){
        lightBoxdisplayImage.src = displayImages[--lightboxImgInd];
    }
    else{
        lightBoxdisplayImage.src = displayImages[3];
        lightboxImgInd=3;
    }
}
function lightboxDisplayImg(index){
    lightBoxdisplayImage.src = displayImages[index];
}
function selectedImgOpacity(index){
    
}

//display cart details
function openCart()
{
    if (cartDetailsDisplay.style.display=="none"){
        cartDetailsDisplay.style.display="block";
    }
    else{
        cartDetailsDisplay.style.display="none";
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
function addItemsToCart(a){
    if (shoeQuantityTracking>0){
        cartQuantity.innerHTML=++cartQuantityTracking;
        cartQuantity.style.display="block";

        //add items to cart list
        cart.splice(0,0,{...product[a-1]});
        cart[0]['quantity']=shoeQuantityTracking;

        //clear quantity
        shoeQuantity.innerHTML = shoeQuantityTracking = 0;

        //show confirmation message
        // addItemsToCartConfirmationMessage.style.display = "flex";
        addItemsToCartConfirmationMessage.classList.add("elementToFadeInAndOut");
        setTimeout(function(){addItemsToCartConfirmationMessage.classList.remove("elementToFadeInAndOut")},2000)
        // addItemsToCartConfirmationMessage.style.display = "none";
    
        displayCart();
    }
}

function delItem(a){
    cart.splice(a,1);
    cartQuantity.innerHTML=--cartQuantityTracking;
    displayCart();
}

function displayCart(){
     let j=0;
     if(cart.length==0){
        cartDetails.innerHTML = "Your cart is empty";
     }
     else{
        cartDetails.innerHTML = cart.map((items)=>
        {
            let {id,image,title,quantity}=items;
            return(
                `<div class="in-cart-item">
                <img src=${image} alt="product-${id}-thumbnail">
                <div class="items-in-cart">
                  <div class="in-cart-item-right">
                    <h3>${title}</h3>
                    <div class="in-cart-item-quantity"><span>Quantity: </span><span>${quantity}</span></div>
                    <button onclick='delItem("${j++}")'>Remove</button>
                  </div>
                </div>
              </div>`
            );
        }).join('');
     }
}