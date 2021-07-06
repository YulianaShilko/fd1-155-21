var phones = [
    {
        brand: "samsung",
        year: 2014,
        model: "S21",
        price: 1000,
        imgUrl: "https://mobistore.by/files/products/1/samsung-galaxy-s21-snapdragon-256gb-pr15649_2.800x600w.jpg?13d4f867e97afa0a50af2eae83bed342"
    },
    {
        brand: "apple",
        year: 2012,
        model: "8",
        price: 2000,
        imgUrl: "https://assets.swappie.com/swappie-product-iphone-8-gold.png"
    },
    {
        brand: "Xiaomi",
        year: 2021,
        model: "Redmi 8",
        price: 800,
        imgUrl: "https://nsv.by/upload/image_resize/065/996/a8e951a97e30e138ddfbe1c1d7d9b3e4.jpg"
    },
    {
        brand: "samsung",
        year: 2014,
        model: "S21",
        price: 1000,
        imgUrl: "https://mobistore.by/files/products/1/samsung-galaxy-s21-snapdragon-256gb-pr15649_2.800x600w.jpg?13d4f867e97afa0a50af2eae83bed342"
    },
    {
        brand: "apple",
        year: 2012,
        model: "8",
        price: 2000,
        imgUrl: "https://assets.swappie.com/swappie-product-iphone-8-gold.png"
    },
    {
        brand: "Xiaomi",
        year: 2021,
        model: "Redmi 8",
        price: 800,
        imgUrl: "https://nsv.by/upload/image_resize/065/996/a8e951a97e30e138ddfbe1c1d7d9b3e4.jpg"
    },
];

render(phones);


var up = document.getElementById("up");
up.addEventListener("click", function (){
    phones.sort(comparePriceUp);
    render(phones);
    console.log("up", phones);
})
var down = document.getElementById("down");
down.addEventListener("click", function (){
    phones.sort(comparePriceDown);
    render(phones);
    console.log("down", phones);
})

function comparePriceUp(a,b){
    return b.price - a.price
}

function comparePriceDown(a,b){
    return a.price - b.price
}


function render(arr){
    var app = document.getElementById("app");

    var strHtml = "";

    for(var i=0; i<arr.length; i++){
        strHtml += `<div class="card">
                    <img src="${arr[i].imgUrl}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">Brand: ${arr[i].brand}</h5>
                        <p class="card-text">Model: ${arr[i].model}</p>
                        <p class="card-text">Year: ${arr[i].year}</p>
                        <p class="card-text">Price: ${arr[i].price}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>`
    }

    app.innerHTML = strHtml;
}


