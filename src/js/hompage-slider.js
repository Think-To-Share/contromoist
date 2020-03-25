import 'owl.carousel';

// Starting...
$('.homepage-review-section .slider-container').owlCarousel({
    loop: false,
    nav: false,
    dots: true,
    margin:30,
    responsive: {
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    },
    smartSpeed: 450,
    autoplay: true,
    autoplayHoverPause: true,
});
