
(function($){
    "use strict"

    var $window = $(window);
    var zero = 0;

    //sticky header
    $window.on('scroll', function () {
        if ($(window).scrollTop() > 100) {
            $('.main-header-area').addClass('navbar-sticky');
        } else {
            $('.main-header-area').removeClass('navbar-sticky');
        }
    });

    //Testimonials SLIDER ACTIVE CODE
            $('.testi-slider.owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                nav: true,
                dots: false,
                smartSpeed: 2000,
                autoplay: true,
                responsiveClass: true,
                autoplayTimeout: 4000,
                navText: ["<i class='icofont-arrow-left'></i>", "<i class='icofont-arrow-right'></i>"],
                responsive: {
                    0: {
                        items: 1,
                        nav: false
                    },
                    576: {
                        items: 2
                    },
                    768: {
                        items: 2
                    },
                    992: {
                        items: 2
                    }
                }
            });

}(jQuery));