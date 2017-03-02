$(document).ready(function(){
    $("header").sticky({topSpacing:0});
    $("#timer").countdown("2017/06/02", function(event) {
        var $this = $(this).html(event.strftime(''
        + '<span class="days">%D</span> : '
        + '<span class="hr">%H</span> : '
        + '<span class="min">%M</span> : '
        + '<span class="sec">%S</span>'));
    });
    $('#slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 3,
        prevArrow: '<div class="prev"></div>',
        nextArrow: '<div class="next"></div>',
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            }
        },
        {
            breakpoint: 770,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: false,
            dots: true,
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
        ]
    });
    $( "#mmenu" ).click(function() {
        $('#open_menu').toggle();
    });
    $( "#close_menu" ).click(function() {
        $('#open_menu').toggle();
    });
});