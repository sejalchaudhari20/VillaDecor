if ($(".testimonial-slider".length)) {
    $(".testimonial-slider").owlCarousel({
        autoplay:true,
        smartSpeed: 1000,
        loop: true,
        items: 1
    });
}
$(".hero-slider").owlCarousel({
    autoplay:true,
    smartSpeed: 1000,
    loop: true,
    items: 1
   
});

if ($(".partners-slider").length) {
    $(".partners-slider").owlCarousel({
        autoplay: true,
        smartSpeed: 300,
        margin: 30,
        loop: true,
        autoplayHoverPause: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },

            550: {
                items: 3
            },

            992: {
                items: 4
            },

            1200: {
                items: 5
            }
        }
    });
}