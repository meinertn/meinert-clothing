(function ($) {

  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').fadeOut(1000); // set duration in brackets    
    });


    // MENU
    $('.menu-burger').on('click', function() {
      $('.menu-bg, .menu-items, .menu-burger').toggleClass('fs');
      $('.menu-burger').text() == "☰" ? $('.menu-burger').text('✕') : $('.menu-burger').text('☰');
    });


    // ABOUT SLIDER
    $('body').vegas({
        slides: [
            { src: 'images/slide-image01.jpg' },
            { src: 'images/slide-image02.jpg' }
            { src: 'images/hoodie-mockup-of-a-young-hipster-guy-staring-down-and-leaning-against-a-wall-a12594 (1).png' },
            { src: 'images/hispanic-couple-posing-for-a-picture-while-wearing-different-crewneck-sweatshirts-mockup-a15568 (1).png' }
        ],
        timer: false,
        transition: [ 'zoomOut', ]
    });

})(jQuery);
