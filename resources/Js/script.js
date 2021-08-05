$(document).ready(function () {

    $('nav').removeClass('sticky');
    /* For the sticky navigation */
    $('.js--section-features').waypoint(function (direction) {

        if (direction == "down") {
            $('nav').addClass('sticky');
            $(".mobil-nav-icon").css("color", "black");
        } else {
            $('nav').removeClass('sticky');
            $(".mobil-nav-icon").css("color", "rgba(250,250,250,0.98)");
        }
    }, {
        offset: '60px;'
    });



    /* Scroll on buttons */


    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({ scrollTop: $('.js--section-plans').offset().top }, 1000);
    });

    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({ scrollTop: $('.js--section-features').offset().top }, 1000);
    });

    /* Navigation scroll */

    $(function () {
        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({ scrollTop: target.offset().top }, 1000);
                    return false;
                }
            }
        });
    });

    /* Animations */

    $('.js--wp-1').waypoint(function (direction) {
        $('.js--wp-1').addClass('animated fadeInDown');
    }, {
        offset: '60%;'
    })


    $('.js--wp-2').waypoint(function (direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%;'
    })

    $('.js--wp-3').waypoint(function (direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%;'
    })

    $('.js--wp-4').waypoint(function (direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%;'
    });


    /* mobile nav */
    $('.mobil-nav-icon').click(function () {
        var nav = $('.js--main-nav');
        var icon = $("[name='menu-outline']");
        var iconX = $("[name='close-outline']");

        nav.slideToggle(200);
        icon.slideToggle(100)
        iconX.slideToggle(200);




    });


});

