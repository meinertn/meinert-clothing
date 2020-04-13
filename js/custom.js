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
            { src: 'images/slide-image02.jpg' },
            { src: 'images/unisex-t-shirt-mockup-featuring-a-happy-girl-with-a-trendy-outfit-22962.png' },
            { src: 'images/tote-bag-mockup-of-a-cool-guy-sitting-on-a-concrete-fence-29451.png' },
            { src: 'images/mockup-of-a-couple-wearing-long-sleeve-t-shirts-in-autumn-31808.png' },
            { src: 'images/hoodie-mockup-of-a-young-man-wearing-a-dad-hat-in-an-urban-setting-31178.png' },
            { src: 'images/hoodie-mockup-of-a-woman-posing-in-a-tropical-scenario-3552-el1.png' },
            { src: 'images/athleisure-mockup-featuring-a-woman-wearing-a-crop-top-hoodie-32466.png' }
        ],
        timer: false,
        transition: [ 'zoomOut', ]
    });

})(jQuery);
