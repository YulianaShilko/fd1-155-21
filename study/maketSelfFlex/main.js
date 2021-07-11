$outer_container=$("#outer_container");
$thumbScroller=$("#thumbScroller");
$thumbScroller_container=$("#thumbScroller .container1");
$thumbScroller_content=$("#thumbScroller .content");
$thumbScroller_thumb=$("#thumbScroller .thumb");
 
var sliderWidth=$thumbScroller.width();
var itemWidth=$thumbScroller_content.width();
 
$thumbScroller_content.each(function (i) {
    totalContent=i*itemWidth;   
    $thumbScroller_container.css("width",totalContent+itemWidth);
});
 
$thumbScroller.mousemove(function(e){
    var mouseCoords=(e.pageX - this.offsetLeft);
      var mousePercentY=mouseCoords/sliderWidth;
      var destY=-(((totalContent-(sliderWidth-itemWidth))-sliderWidth)*(mousePercentY));
      var thePosA=mouseCoords-destY;
      var thePosB=destY-mouseCoords;
      if(mouseCoords==destY){
        $thumbScroller_container.stop();
      }
      if(mouseCoords>destY){
        $thumbScroller_container.css("left",-thePosA);
      }
      if(mouseCoords<destY){
        $thumbScroller_container.css("left",thePosB);
      }
});
 
var fadeSpeed=300;
 
$thumbScroller_thumb.each(function () {
    var $this=$(this);
    $this.fadeTo(fadeSpeed, 0.5);
});
 
$thumbScroller_thumb.hover(
    function(){ //mouse over
        var $this=$(this);
        $this.stop().fadeTo(fadeSpeed, 1);
    },
    function(){ //mouse out
        var $this=$(this);
        $this.stop().fadeTo(fadeSpeed, 0.5);
    }
);


var modalLeftMenu = document.getElementById('myModalCategory');
var btnLeftMenu = document.getElementById("myBtn-ModalCategory");
var btnLeftMenu2 = document.getElementById("myBtn-ModalCategory2");

btnLeftMenu.onclick = function() {
    modalLeftMenu.style.display = "block";
}

btnLeftMenu2.onclick = function() {
    modalLeftMenu.style.display = "block";
}



window.onclick = function(event) {{
    if ( event.target == modalLeftMenu) {
        modalLeftMenu.style.display = "none";
        modalLeftMenu2.style.display = "none";}
        else if (event.target == modalEnter){
        modalEnter.style.display = "none";}
    }
}
var modalLeftMenuMore = document.getElementById('myleftMenuCategoryMore');
var btnLeftMenuMore = document.getElementById("myBtn-leftMenuCategory");
var btnLeftMenuMore1 = document.getElementById("myBtn-leftMenuCategory1");
var btnLeftMenuMore2 = document.getElementById("myBtn-leftMenuCategory2");
var btnLeftMenuMore3 = document.getElementById("myBtn-leftMenuCategory3");
var btnLeftMenuMore4 = document.getElementById("myBtn-leftMenuCategory4");
var btnLeftMenuMore5 = document.getElementById("myBtn-leftMenuCategory5");
var btnLeftMenuMore6 = document.getElementById("myBtn-leftMenuCategory6");

btnLeftMenuMore.onclick = function() {
    modalLeftMenuMore.style.display = "block";
    btnLeftMenuMore.style.backgroundColor = "#FADE4B";
    btnLeftMenuMore1.style.backgroundColor= "white"; btnLeftMenuMore2.style.backgroundColor= "white"; 
    btnLeftMenuMore3.style.backgroundColor= "white"; btnLeftMenuMore4.style.backgroundColor= "white";
    btnLeftMenuMore5.style.backgroundColor= "white"; btnLeftMenuMore6.style.backgroundColor = "white";

}

btnLeftMenuMore1.onclick = function() {
    modalLeftMenuMore.style.display = "block";
    btnLeftMenuMore1.style.backgroundColor = "#FADE4B";
    btnLeftMenuMore.style.backgroundColor= "white"; btnLeftMenuMore2.style.backgroundColor= "white"; 
    btnLeftMenuMore3.style.backgroundColor= "white"; btnLeftMenuMore4.style.backgroundColor= "white";
    btnLeftMenuMore5.style.backgroundColor= "white"; btnLeftMenuMore6.style.backgroundColor = "white";
}
btnLeftMenuMore2.onclick = function() {
    modalLeftMenuMore.style.display = "block";
    btnLeftMenuMore2.style.backgroundColor = "#FADE4B";
    btnLeftMenuMore.style.backgroundColor= "white"; btnLeftMenuMore1.style.backgroundColor= "white"; 
    btnLeftMenuMore3.style.backgroundColor= "white"; btnLeftMenuMore4.style.backgroundColor= "white";
    btnLeftMenuMore5.style.backgroundColor= "white"; btnLeftMenuMore6.style.backgroundColor = "white";
}
btnLeftMenuMore3.onclick = function() {
    modalLeftMenuMore.style.display = "block";
    btnLeftMenuMore3.style.backgroundColor = "#FADE4B";
    btnLeftMenuMore.style.backgroundColor= "white"; btnLeftMenuMore1.style.backgroundColor= "white"; 
    btnLeftMenuMore2.style.backgroundColor= "white"; btnLeftMenuMore4.style.backgroundColor= "white";
    btnLeftMenuMore5.style.backgroundColor= "white"; btnLeftMenuMore6.style.backgroundColor = "white";
}
btnLeftMenuMore4.onclick = function() {
    modalLeftMenuMore.style.display = "block";
    btnLeftMenuMore4.style.backgroundColor = "#FADE4B";
    btnLeftMenuMore.style.backgroundColor= "white"; btnLeftMenuMore1.style.backgroundColor= "white"; 
    btnLeftMenuMore2.style.backgroundColor= "white"; btnLeftMenuMore3.style.backgroundColor= "white";
    btnLeftMenuMore5.style.backgroundColor= "white"; btnLeftMenuMore6.style.backgroundColor = "white";
}
btnLeftMenuMore5.onclick = function() {
    modalLeftMenuMore.style.display = "block";
    btnLeftMenuMore5.style.backgroundColor = "#FADE4B";
    btnLeftMenuMore.style.backgroundColor= "white"; btnLeftMenuMore1.style.backgroundColor= "white"; 
    btnLeftMenuMore2.style.backgroundColor= "white"; btnLeftMenuMore3.style.backgroundColor= "white";
    btnLeftMenuMore4.style.backgroundColor= "white"; btnLeftMenuMore6.style.backgroundColor = "white";
}
btnLeftMenuMore6.onclick = function() {
    modalLeftMenuMore.style.display = "block";
    btnLeftMenuMore6.style.backgroundColor = "#FADE4B";
    btnLeftMenuMore.style.backgroundColor= "white"; btnLeftMenuMore1.style.backgroundColor= "white"; 
    btnLeftMenuMore2.style.backgroundColor= "white"; btnLeftMenuMore3.style.backgroundColor= "white";
    btnLeftMenuMore4.style.backgroundColor= "white"; btnLeftMenuMore5.style.backgroundColor = "white";
}

var modalEnter = document.getElementById('myModalEnter');
var btnModalEnter = document.getElementById("enter");
var btnModalEnter1 = document.getElementById("enter1");
var btnModalEnter2 = document.getElementById("enter2");

btnModalEnter.onclick = function() {
    modalEnter.style.display = "block";
}
btnModalEnter1.onclick = function() {
    modalEnter.style.display = "block";
}
btnModalEnter2.onclick = function() {
    modalEnter.style.display = "block";
}







