const product = [
    {
        id: 1,
        image: 'images/image-product-1-thumbnail.jpg',
        title: 'Fall Limited Edition Sneakers',
        price: 123,
    },
    {
        id: 2,
        image: 'images/image-product-2-thumbnail.jpg',
        title: 'OMG',
        price: 0,
    }
]

product.map((item)=>
{
    let {id,image,title,price} = item;
    console.log("id:"+id+"\n");
    console.log("image:"+image+"\n");
    console.log("title:"+title+"\n");
    console.log("price:"+price+"\n");
})
