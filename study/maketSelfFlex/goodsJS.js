var totalPhoto = document.getElementById('bigPhoto');
var btnMiniPhoto1 = document.getElementById("miniPhoto1");
var btnMiniPhoto2 = document.getElementById("miniPhoto2");
var btnMiniPhoto3 = document.getElementById("miniPhoto3");
var btnMiniPhoto4 = document.getElementById("miniPhoto4");

btnMiniPhoto1.onclick = function() {
    totalPhoto.style.background = "url('img/totalPhotoGoods.png') no-repeat center";

}
btnMiniPhoto2.onclick = function() {
    bigPhoto.style.background = "url('img/maxiBackPhoto1.jpg') no-repeat center",
    bigPhoto.style.backgroundSize = "50% auto";
}
btnMiniPhoto3.onclick = function() {
    bigPhoto.style.background = "url('img/maxiRightPhoto1.jpg') no-repeat center";
    bigPhoto.style.backgroundSize = "30% auto";
}
btnMiniPhoto4.onclick = function() {
    bigPhoto.style.background = "url('img/maxiBackPhoto1.jpg') no-repeat center";
    bigPhoto.style.backgroundSize = "50% auto";
}

var totalcharacteristics = document.getElementById('characteristics');
var btnCharacteristics = document.getElementById("btnCharacteristicsShow");

btnCharacteristics.onclick = function() {
    totalcharacteristics.style.display = "block";
    btnCharacteristics.style.backgroundColor = "#FADE4B";
    btnDescript.style.backgroundColor= "white"; btnReview.style.backgroundColor= "white";
    totaldescript.style.display = "none";
    totalreview.style.display = "none";
}

var totaldescript = document.getElementById('descript');
var btnDescript = document.getElementById("btnDescriptShow");

btnDescript.onclick = function() {
    totaldescript.style.display = "block";
    btnDescript.style.backgroundColor = "#FADE4B";
    btnCharacteristics.style.backgroundColor= "white"; btnReview.style.backgroundColor= "white";
    totalcharacteristics.style.display = "none";
    totalreview.style.display = "none";
}

var totalreview = document.getElementById('review');
var btnReview = document.getElementById("btnReviewShow");

btnReview.onclick = function() {
    totalreview.style.display = "block";
    btnReview.style.backgroundColor = "#FADE4B";
    btnCharacteristics.style.backgroundColor= "white"; btnDescript.style.backgroundColor= "white";
    totalcharacteristics.style.display = "none";
    totaldescript.style.display = "none";
}