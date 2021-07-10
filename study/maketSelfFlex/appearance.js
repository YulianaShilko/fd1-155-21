$(document).ready(function(){
    $.fn.fade_logo = function (ops) {
     var $elem = this;
     var res = $.extend({ delay: 400, speed: 400 }, ops);
     for (var i=0, pause=0, l=$elem.length; i<l; i++, pause+=res.delay) {
      $elem.eq(i).delay(pause).fadeIn(res.speed);
     }
     return $elem;
    };
    $('.logo').fade_logo();
   });

