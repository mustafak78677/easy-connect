'use strict'


/*
========================================
    Preloader
========================================
*/
$(window).on('load', function() {
    $('#preloader').delay(200).fadeOut('slow');
    $('body').delay(200).css({
        'overflow': 'visible'
    });
});


/* responsive menu  */

jQuery(document).ready(function() {
    jQuery('#mobile-menu').meanmenu({
        meanMenuContainer: ".mobile-menu",
        meanScreenWidth: "991",
        meanRevealPosition: "right",
    });
});


/* ===============================================
        AddClass menu js
   ===============================================
*/

$(window).on('scroll', function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
        $(".navigation-area").addClass("shrinkheader");
    } else {
        $(".navigation-area").removeClass("shrinkheader");
    }
});


/* 
========================================
    SearchBar
========================================
*/

$(document).ready(function() {
    $('.search-open').on('click', function() {
        $('.search-bar').addClass('active');
        $('.search-close, .close-toggle-body').addClass('open');
    });
    $('.search-close, .close-toggle-body').on('click', function() {
        $('.search-bar').removeClass('active');
        $('.search-close, .close-toggle-body').removeClass('open');
    });
});

/* 
========================================
    Navigation Bars
========================================
*/

$(document).ready(function() {
    $('.navigation-bars-five').on('click', function() {
        $('.menu-bars').toggleClass('active');
        $('#mobile-menu').toggleClass('active');
    });
    /* $('.close-bars,.close-body').on('click', function() {
        $('.navigation-five').removeClass('active');
    }); */
});


/* 
========================================
    data paroller
========================================
*/

$("[data-paroller-factor]").paroller();


/* 
========================================
    data background
========================================
*/
$(document).ready(function() {

    $("[data-background]").each(function() {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    });

    $("[data-bg-color]").each(function() {
        $(this).css("background", $(this).attr("data-bg-color"))
    });

});


/* 
========================================
    CountDown Timer
========================================
*/

$('#simple_timer').syotimer({
    year: 2021,
    month: 9,
    day: 9,
    hour: 20,
    minute: 30
});

/*
========================================
    circle progress bar
========================================
*/

if ($('.progress-circle').length) {
    $(".progress-circle").loading();
}

/* 
========================================
    Nice Select
========================================
*/

$(document).ready(function() {
    $('select').niceSelect();
});


/* 
========================================
    Tab
========================================
*/

$('ul.tabs li').click(function() {
    var tab_id = $(this).attr('data-tab');

    $('ul.tabs li').removeClass('active');
    $('.tab-content').removeClass('active');

    $(this).addClass('active');
    $("#" + tab_id).addClass('active');
});



/*
========================================
counter Odometer
========================================
*/

$(".counter-count").each(function() {
    $(this).isInViewport(function(status) {
        if (status === "entered") {
            for (var i = 0; i < document.querySelectorAll(".odometer").length; i++) {
                var el = document.querySelectorAll('.odometer')[i];
                el.innerHTML = el.getAttribute("data-odometer-final");
            }
        }
    });
});


/*
========================================
accordion
========================================
*/

if ($('.accordion').length) {
    // (Optional) Active an item if it has the class "is-active"	
    $(".accordion > .accordion-item.is-active").children(".accordion-panel").slideDown();

    $(".accordion > .accordion-item").on('click', function() {
        // Cancel the siblings
        $(this).siblings(".accordion-item").removeClass("is-active").children(".accordion-panel").slideUp();
        // Toggle the item
        $(this).toggleClass("is-active").children(".accordion-panel").slideToggle("ease-out");
    });
}


/* 
========================================
    slick slide
========================================
*/


/* Testimonial */

$('.testimonial-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    swipe: true,
    swipeToSlide: true,
    touchMove: true,
    dots: true,
    arrows: true,
    nextArrow: '<i class="las la-long-arrow-alt-right"></i>',
    prevArrow: '<i class="las la-long-arrow-alt-left"></i>',
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [{
        breakpoint: 992,
        settings: {
            slidesToShow: 1,
            arrows: false,
        }
    }],
});

/* Testimonial Two */

$('.testimonial-img-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    fade: true,
    asNavFor: '.testimonial-slider-two'
});
$('.testimonial-slider-two').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.testimonial-img-slider',
    dots: true,
    autoplay: false,
    pauseOnHover: true,
    arrows: false,
});



/* Testimonial Three */

$('.testimonial-slider-three').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    swipe: true,
    swipeToSlide: true,
    touchMove: true,
    dots: true,
    arrows: false,
    nextArrow: '<i class="las la-long-arrow-alt-right"></i>',
    prevArrow: '<i class="las la-long-arrow-alt-left"></i>',
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
});

/* Testimonial Five */

$('.testimonial-five-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    pauseOnHover: true,
    arrows: false,
});




/* Brands */

$('.brands-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    swipe: true,
    swipeToSlide: true,
    dots: false,
    arrows: false,
    nextArrow: '<i class="las la-long-arrow-alt-right"></i>',
    prevArrow: '<i class="las la-long-arrow-alt-left"></i>',
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
    ]
});

/* Brands Two */

$('.brands-two-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    swipeToSlide: true,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                arrows: false,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: false,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
            }
        },
    ]
});

/* Brands Three */

$('.brands-slider-four').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    swipeToSlide: true,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                arrows: false,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
            }
        },
    ]
});


/* Speakers */

$('.speaker-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    swipe: true,
    swipeToSlide: true,
    dots: false,
    arrows: true,
    nextArrow: '<i class="las la-angle-right"></i>',
    prevArrow: '<i class="las la-angle-left"></i>',
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                dots: true,
                arrows: false,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
            }
        },
    ]
});

/* Blogs */

$('.blog-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    swipe: true,
    swipeToSlide: true,
    dots: false,
    arrows: true,
    nextArrow: '<i class="las la-angle-right"></i>',
    prevArrow: '<i class="las la-angle-left"></i>',
    autoplay: false,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                dots: true,
                arrows: false,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
            }
        },
    ]
});


/* 
========================================
    video
========================================
*/

$('.video-play-btn').magnificPopup({
    type: 'iframe',
});



/*
========================================
    Parallax
========================================
*/

jarallax(document.querySelectorAll('.parallax'), {
    speed: 0.3,
});



/* 
========================================
    Blog Pagination
========================================
*/

$(document).ready(function() {
    $('.blog-pagination li a').click(function() {
        $('.blog-pagination li a').removeClass("active");
        $(this).addClass("active");
    });
});


/*
========================================
Scroll to top
========================================
*/

if ($('#scroll-top').length) {
    function scrollToTop() {
        var $scrollUp = $('#scroll-top'),
            $lastScrollTop = 0,
            $window = $(window);

        $window.on('scroll', function() {
            var st = $(this).scrollTop();
            if (st > $lastScrollTop) {
                $scrollUp.removeClass('show');
            } else {
                if ($window.scrollTop() > 200) {
                    $scrollUp.addClass('show');
                } else {
                    $scrollUp.removeClass('show');
                }
            }
            $lastScrollTop = st;
        });

        $scrollUp.on('click', function(evt) {
            $('html, body').animate({ scrollTop: 0 }, 600);
            evt.preventDefault();
        });
    }
    scrollToTop();
}


/* 
========================================
    Wow Animation
========================================
*/

// new WOW().init();


/* 
========================================
    Dots Map
========================================
*/

$(function() {

    var test_plots = {
        "paris": {
            latitude: 48.86,
            longitude: 2.3444444444444,
            tooltip: {
                content: "Paris"
            }
        },
        "tokyo": {
            latitude: 35.689488,
            longitude: 139.691706,
            tooltip: {
                content: "Tokyo"
            }
        },
        "moscow": {
            latitude: 55.755786,
            longitude: 37.617633,
            tooltip: {
                content: "Moscow"
            }
        },
        "los_angeles": {
            latitude: 34.052234,
            longitude: -118.243685,
            tooltip: {
                content: "Los Angeles"
            }
        },
        "punta_arenas": {
            latitude: -53.163833,
            longitude: -70.917068,
            tooltip: {
                "content": "<span style=\"font-weight:bold;\">punta_arenas</span><br />Population : 5922550"
            }
        },
        "aukland": {
            latitude: -36.84846,
            longitude: 174.763332,
            tooltip: {
                content: "Aukland"
            }
        },
        "kiruna": {
            latitude: 67.855737,
            longitude: 20.225231,
            tooltip: {
                content: "Kiruna"
            }
        },
        "reykjavik": {
            latitude: 64.135338,
            longitude: -21.89521,
            tooltip: {
                content: "Reykjavík"
            }
        },
        "alert": {
            latitude: 82.516305,
            longitude: -62.308482,
            tooltip: {
                content: "Alert"
            }
        },
        "wales": {
            latitude: 65.609167,
            longitude: -168.0875,
            tooltip: {
                content: "Wales"
            }
        },
        "tiksi": {
            latitude: 71.625094,
            longitude: 128.872883,
            tooltip: {
                content: "Tiksi"
            }
        },
        "pretoria": {
            latitude: -25.746019,
            longitude: 28.18712,
            tooltip: {
                "content": "<span style=\"font-weight:bold;\">Zimbabwe</span><br />Population : 45922550"
            }
        },
        "Bangladesh": {
            latitude: 24.746019,
            longitude: 90.18712,
            tooltip: {
                content: "Bangladesh"
            }
        },
    };

    var getElemID = function(elem) {
        return $(elem.node).attr("data-id");
    };

    $(".mapcontainer_equi").mapael({
        map: {
            name: "world_countries",
            defaultArea: {
                tooltip: {
                    content: getElemID
                }
            }
        },
        plots: test_plots
    });
});