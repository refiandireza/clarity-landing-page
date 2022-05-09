$(document).ready(function() {
    var prevScroll = $(window).scrollTop();
    
    function showOnReload() {
        if($(window).scrollTop() > 40) {
            $('.scroll-top').show();
        } else if($(this).scrollTop() <= 100) {
            $('.scroll-top').hide();
        }

        $('.header').addClass('sticky-up');
    }

    $('.charity .card-list').slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    variableWidth: false
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: false
                }
            }
        ]
    });

    $('.products .products-slider').slick({
        // centerMode: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        variableWidth: true,
        dots: true,
        // mobileFirst: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    variableWidth: false,
                    // centerMode: true
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: false,
                    
                }
            },
        ]
    });

    $('.box-list').slick({
        dots: true,
        infinite: true,
        // variableWidth: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 2000,
                settings: 'unslick'
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    variableWidth: false,
                    infinite: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    nextArrow: null,
                    prevArrow: null
                }
            }
        ]
    });

    $('.scroll-top').on('click', function() {
        $('html').animate({scrollTop: 0}, 700);
    });

    // font button

    $('.font-button').on('click', function() {
        $('body').toggleClass('large-site');
        $('.font-button').toggleClass('active');
    });

    // window on scroll
    
    $(window).on('scroll', function() {
        var currentScroll = $(window).scrollTop();
        var topHeaderHeight = $('.top-header').outerHeight();

        showOnReload();


        // scroll up
        if(prevScroll > currentScroll) {
            // $('.top-header').css('top', -topHeaderHeight);
            $('.header').addClass('sticky-up');
            $('.header').removeClass('sticky-down');
            $('.header.sticky-up').css('top', '0');
            

        } else {
            // $('.top-header').css('top', '0');
            $('.header').removeClass('sticky-up');
            $('.header').addClass('sticky-down');
            $('.header.sticky-down').css('top', -topHeaderHeight);
        }
        prevScroll = currentScroll;
    });

    // popup toggle

    $('.popup-toggle').click(function(e) {
        e.preventDefault();
        $('.popup').toggleClass('popup-active');
        $('body').toggleClass('overflow-hidden');
        // $('.popup-content').toggleClass('position-fixed');
    });

    // menu toggle

    $('.hamburger').on('click', function() {
        var headerHeight = $('.header').height();
        $('.navbar').toggleClass('toggle-onactive');
        $('body').toggleClass('overflow-hidden');
        // $('.drawer').css('top', headerHeight);
        // if ($('.navbar').hasClass('toggle-onactive')) {
            
        // }
        
    });

    // slick
    

    

    

    // dark mode

    $('.theme-button').on('click', function() {
        $('body').toggleClass('dark');
        if ($('body').hasClass('dark')) {
            $('.dark-icon').attr('src', './src/public/svg/sun.svg');
            $('.menu-icon').attr('src', './src/public/svg/hamburger-white.svg');
            $('.logo-icon').attr('src', './src/public/logo/logo-footer.svg');
            $('.font-icon').attr('src', './src/public/logo/icon-font-size-black.png');
            $('.btn-up-icon').attr('src', './src/public/svg/arrow-up-white.svg');
        } else {
            $('.dark-icon').attr('src', './src/public/svg/dark-mode-green.svg');
            $('.menu-icon').attr('src', './src/public/svg/hamburger-green.svg');
            $('.logo-icon').attr('src', './src/public/logo/logo-header.svg');
            $('.font-icon').attr('src', './src/public/logo/icon-font-size.png');
            $('.btn-up-icon').attr('src', './src/public/svg/arrow-up-green.svg');
        }
    });

    showOnReload();
})