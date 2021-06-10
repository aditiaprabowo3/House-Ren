$(Document).ready(function() {
    $(".owl-carousel").owlCarousel({
        loop:true,
        autoplay:true,
        loop:true,
        margin:20,
        nav:false,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            800:{
                items:2
            },
            1000:{
                items:3
            },
            1100:{
                items:4
            }
        }
    
    });
});

// navbar
$(window).scroll(function() {
    if($(window).scrollTop()) {
        $('.navbar').addClass('putih')
    }
    else {
        $(".navbar").removeClass('putih')
    };
});