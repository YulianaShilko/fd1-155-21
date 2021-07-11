


function onclick1(e){
    var btnDel1 = document.getElementById("btnPickUp");
    var btnDel2 = document.getElementById("btnDelivery");
    var printBlock = document.getElementById("printBlock");
    var adressYours;
    var language = e.target.value;
    
    if (language == "pickUp")
        btnDel1.style.background = "white",
        btnDel1.style.border = "2px solid black",
        btnDel1.style.opacity = "1",
        btnDel2.style.background = "#F7F7FA",
        btnDel2.style.border = "none",
        btnDel2.style.opacity = "0.5",
        printBlock.style.display = "none";
        

        
        else 
        btnDel2.style.background = "white",
        btnDel2.style.border = "2px solid black",
        btnDel2.style.opacity = "1",
        btnDel1.style.background = "#F7F7FA",
        btnDel1.style.border = "none",
        btnDel1.style.opacity = "0.5",
        printBlock.style.display = "block";
}
/* function putAdress(){
    if (language == "pickUp")
            adressYours = prompt('Введите Ваш адрес ');
            printBlock.value = adressYours; 
        } */
for (var i = 0; i < myForm.theWayDelivery.length; i++) {
    myForm.theWayDelivery[i].addEventListener("click", onclick1);
};

function onclick2(r){
    var btnPay1 = document.getElementById("btnByCard");
    var btnPay2 = document.getElementById("btnCash");

    var oplata = r.target.value;
    if (oplata == "byCard")
        btnPay1.style.background = "white",
        btnPay1.style.border = "2px solid black",
        btnPay1.style.opacity = "1",
        btnPay2.style.background = "#F7F7FA",
        btnPay2.style.border = "none",
        btnPay2.style.opacity = "0.5";

        else 
        btnPay2.style.background = "white",
        btnPay2.style.border = "2px solid black",
        btnPay2.style.opacity = "1",
        btnPay1.style.background = "#F7F7FA",
        btnPay1.style.border = "none",
        btnPay1.style.opacity = "0.5";
}
for (var l = 0; l < myForm2.theWayPayment.length; l++) {
    myForm2.theWayPayment[l].addEventListener("click", onclick2);
}
