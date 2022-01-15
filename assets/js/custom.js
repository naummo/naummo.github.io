(function($) {

    "use strict";
    
    // Smooth scrolling using jQuery easing
    
    function sidebar_menu_scroll(){
    
       $('a.js-scroll-trigger[href*="#"]:not([href="#"])').on("click", function(){
    
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: (target.offset().top - 0)
            }, 250, "easeInCirc");
            return true;
          }
        }
    
       });
    }
    
     sidebar_menu_scroll();
    
    
        // wow js for animated
        //  new WOW().init();
    })(jQuery);