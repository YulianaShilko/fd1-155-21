var cameras = [
    {
        brand: "Canon EOS 5D Mark IV Body",
        price: 4240 ,
        previousPrice: 5400,
        sale: -10 + "%",
        likes: 26,
        imgSrc: "img/cameras1.png"
    },
    {
        brand: "Зеркальный фотоаппарат Canon EOS 1D X Mark II Body",
        price: 8455,
        previousPrice: 8900  + "р",
        sale: -5 + "%",
        likes: 21,
        imgSrc: "img/cameras2.png"
    },
    {
        brand: "Зеркальный фотоаппарат Canon EOS 6D Mark II Body",
        price: 6040,
        previousPrice: "",
        sale:  "",
        likes: 19,
        imgSrc: "img/cameras3.png"
    },
    {
        brand: "Зеркальный фотоаппарат Canon EOS 80D Body",
        price: 1840,
        previousPrice: "",
        sale:  "",
        likes: 13,
        imgSrc: "img/cameras4.png"
    },
    {
        brand: "Зеркальный фотоаппарат Canon EOS-1D X Mark III Body",
        price: 9500,
        previousPrice: 10000  + "р",
        sale: -5 + "%",
        likes: 12,
        imgSrc: "img/cameras5.png"
    },
    {
        brand: "Canon EOS 250D Kit EF-S 18-55mm f/4-5.6 IS STM silver",
        price: 4240,
        previousPrice: 5400  + "р",
        sale: -10 + "%",
        likes: 11,
        imgSrc: "img/cameras6.png"
    },
    {
        brand: "Зеркальный фотоаппарат Canon EOS 850D Kit EF-S ",
        price: 3230,
        previousPrice: 3800  + "р",
        sale: -15 + "%",
        likes: 7,
        imgSrc: "img/cameras7.png"
    },
    {
        brand: "Зеркальный фотоаппарат Canon EOS 2000D Kit 18-55 III",
        price: 995,
        previousPrice: 1050  + "р",
        sale: -5 + "%",
        likes: 7,
        imgSrc: "img/cameras8.png"
    },
    {
        brand: "Canon EOS 250D Kit EF-S 18-55mm f/4-5.6 IS STM white",
        price: 3600,
        previousPrice: 4000  + "р",
        sale: -10 + "%",
        likes: 6,
        imgSrc: "img/cameras9.png"
    },
    {
        brand: "Зеркальный фотоаппарат Canon EOS 850D Kit EF-S ",
        price: 1440,
        previousPrice: 3800  + "р",
        sale: -15 + "%",
        likes: 5,
        imgSrc: "img/cameras7.png"
    },
    {
        brand: "Зеркальный фотоаппарат Canon EOS 2000D Kit 18-55 III",
        price: 550,
        previousPrice: 1050  + "р",
        sale: -5 + "%",
        likes: 2,
        imgSrc: "img/cameras8.png"
    },
    {
        brand: "Canon EOS 250D Kit EF-S 18-55mm f/4-5.6 IS STM white",
        price: 400,
        previousPrice: 4000  + "р",
        sale: -10 + "%",
        likes: 2,
        imgSrc: "img/cameras9.png"
    },
];

render(cameras);

var popularDown = document.getElementById("sortPopular");
popularDown.addEventListener("click", function (){
    cameras.sort(comparePopularDown);
    render(cameras);
    console.log("popularDown", cameras);
    popularDown.style.opacity = "1";
    priceDown.style.opacity = "0.3";
})
var priceDown = document.getElementById("sortPrice");
priceDown.addEventListener("click", function (){
    cameras.sort(comparePriceDown);
    render(cameras);
    console.log("priceDown", cameras);
    priceDown.style.opacity = "1";
    popularDown.style.opacity = "0.3";
})

function comparePopularDown(a,b){
    return b.likes - a.likes
}

function comparePriceDown(a,b){
    return a.price - b.price
}

var show18 = document.getElementById("quantity18");
var show9 = document.getElementById("quantity9");
var full = document.getElementById("fullOFGoods");
var btnShowCamerasMore = document.getElementById("showContentCameras");
show18.addEventListener("click", function (){
    
    full.style.height = "100%"; 
    showContentCameras.style.display = "none";
    show18.style.opacity = "1";
    show9.style.opacity = "0.3";
})
show9.addEventListener("click", function (){
    
    full.style.height = "1652px";
    showContentCameras.style.display = "block";
    show9.style.opacity = "1";
    show18.style.opacity = "0.3";
})


function render(arr){
    var app = document.getElementById("beforeTheAdvertising");

    var strHtml = "";
    
    for(var i=0; i<arr.length; i++){
        strHtml += `<a href="https://yulianashilko.github.io/fd1-155-21/study/maketSelfFlex/indexMaketSelfGood.html"> 
                    <div class="card" id="cardId">
                            <img src="${arr[i].imgSrc}" class="card-img-top">
                            <div class="card-price">
                                <p class="mainPrice">${arr[i].price}р</p>
                                <p class="mainPreviousPrice">${arr[i].previousPrice}</p>
                                <p class="mainSale" >${arr[i].sale}</p>
                            </div>
                            <p class="mainBrand" >${arr[i].brand}</p>
                            <div class="likesStars">
                                <div class="stars">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.99998 1.33301L10.06 5.50634L14.6666 6.17967L11.3333 9.42634L12.12 14.013L7.99998 11.8463L3.87998 14.013L4.66665 9.42634L1.33331 6.17967L5.93998 5.50634L7.99998 1.33301Z" stroke="#FADE4B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg> 
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"> 
                                                <path d="M7.99998 1.33301L10.06 5.50634L14.6666 6.17967L11.3333 9.42634L12.12 14.013L7.99998 11.8463L3.87998 14.013L4.66665 9.42634L1.33331 6.17967L5.93998 5.50634L7.99998 1.33301Z" stroke="#FADE4B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
                                            </svg>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">  
                                                <path d="M7.99998 1.33301L10.06 5.50634L14.6666 6.17967L11.3333 9.42634L12.12 14.013L7.99998 11.8463L3.87998 14.013L4.66665 9.42634L1.33331 6.17967L5.93998 5.50634L7.99998 1.33301Z" stroke="#FADE4B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">    
                                                <path d="M7.99998 1.33301L10.06 5.50634L14.6666 6.17967L11.3333 9.42634L12.12 14.013L7.99998 11.8463L3.87998 14.013L4.66665 9.42634L1.33331 6.17967L5.93998 5.50634L7.99998 1.33301Z" stroke="#FADE4B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg> 
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">  
                                                <path d="M7.99998 1.33301L10.06 5.50634L14.6666 6.17967L11.3333 9.42634L12.12 14.013L7.99998 11.8463L3.87998 14.013L4.66665 9.42634L1.33331 6.17967L5.93998 5.50634L7.99998 1.33301Z" stroke="#FADE4B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                </div>
                                <p class="mainLikes">${arr[i].likes}</p>
                            </div>
                            <div class="basket12">
                                <button>В корзину</button>
                                <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.84 3.60987C20.3292 3.09888 19.7228 2.69352 19.0554 2.41696C18.3879 2.14039 17.6725 1.99805 16.95 1.99805C16.2275 1.99805 15.5121 2.14039 14.8446 2.41696C14.1772 2.69352 13.5708 3.09888 13.06 3.60987L12 4.66987L10.94 3.60987C9.9083 2.57818 8.50903 1.99858 7.05 1.99858C5.59096 1.99858 4.19169 2.57818 3.16 3.60987C2.1283 4.64156 1.54871 6.04084 1.54871 7.49987C1.54871 8.95891 2.1283 10.3582 3.16 11.3899L4.22 12.4499L12 20.2299L19.78 12.4499L20.84 11.3899C21.351 10.8791 21.7563 10.2727 22.0329 9.60523C22.3095 8.93777 22.4518 8.22236 22.4518 7.49987C22.4518 6.77738 22.3095 6.06198 22.0329 5.39452C21.7563 4.72706 21.351 4.12063 20.84 3.60987V3.60987Z" stroke="#FB000F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                        </div>
                    </a>`
    }

    app.innerHTML = strHtml;

    $(document).ready(function(){
 $.fn.fade_CardIn = function (ops) {
  var $elem = this;
  var res = $.extend({ delay: 400, speed: 400 }, ops);
  for (var i=0, pause=0, l=$elem.length; i<l; i++, pause+=res.delay) {
   $elem.eq(i).delay(pause).fadeIn(res.speed);
  }
  return $elem;
 };
 $('.card').fade_CardIn();
});
}