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
            { src: 'unisex-t-shirt-mockup-featuring-a-happy-girl-with-a-trendy-outfit-22962.png' },
            { src: 'tote-bag-mockup-of-a-cool-guy-sitting-on-a-concrete-fence-29451 (1).png' },
            { src: 'mockup-of-a-couple-wearing-long-sleeve-t-shirts-in-autumn-31808 (2).png' },
            { src: 'hoodie-mockup-of-a-young-man-wearing-a-dad-hat-in-an-urban-setting-31178 (3).png' },
            { src: 'hoodie-mockup-of-a-woman-posing-in-a-tropical-scenario-3552-el1.png' },
            { src: 'athleisure-mockup-featuring-a-woman-wearing-a-crop-top-hoodie-32466 (3).png' }
        ],
        timer: false,
        transition: [ 'zoomOut', ]
    });

})(jQuery);
