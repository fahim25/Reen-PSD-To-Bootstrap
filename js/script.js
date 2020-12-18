$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:4000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})
/*Sticky Nav*/
jQuery(function ($) {
    $(document).ready(function () {
        //enabling stickUp on the '.navbar-wrapper' class
        $('.menu').stickUp();
    });
});