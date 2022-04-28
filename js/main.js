(function ($) {
    "use strict";
    
    // loader
    var loader = function () {
        setTimeout(function () {
            if ($('#loader').length > 0) {
                $('#loader').removeClass('show');
            }
        }, 1);
    };
    loader();
    
    
    // Initiate the wowjs
    new WOW().init(); //wow is a JavaScript library that generates CSS animations when you scroll 
    
    
    // Back to top button
        //When the scroll event is clicked or when we scroll down, 
        //we check if the current position of the scroll bar is
        // greater than 200 then scroll-to-top is displayed else it will be hidden
    $(window).scroll(function () { 
        if ($(this).scrollTop() > 200) { 
            $('.back-to-top').fadeIn('slow'); // the items fades in slowly
        } else {
            $('.back-to-top').fadeOut('slow'); // the items fades out slowly
        }
    });
         //scrollTop() method is used to get the current position of the scroll bar and the integer value 0 is
         // the position where you reach on clicking the link. 
         //I set the duration of the effect as 1500 milliSeconds, i.e 15secs.
         // i used an animation method call easeInOutExpo
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    
    // Sticky Navbar
    $(window).scroll(function () { // when navbar is greater than zero, the navbar becomes sticky
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('nav-sticky');
        } else {
            $('.navbar').removeClass('nav-sticky');//when navbar is less than zero, the navbar is no longer sticky
        }
    });
    
    
    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    
    
    // Typed Initiate
    // if ($('.hero .hero-text h2').length == 1) {
    //     var typed_strings = $('.hero .hero-text .typed-text').text();
    //     var typed = new Typed('.hero .hero-text h2', {
    //         strings: typed_strings.split(', '),
    //         typeSpeed: 100,
    //         backSpeed: 20,
    //         smartBackspace: false,
    //         loop: true
    //     });
    // }
    
    
    // Skills
    // $('.skills').waypoint(function () {
    //     $('.progress .progress-bar').each(function () {
    //         $(this).css("width", $(this).attr("aria-valuenow") + '%');
    //     });
    // }, {offset: '80%'});


    // Testimonials carousel
    $(".testimonials-carousel").owlCarousel({
        center: true,
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            }
        }
    });
    
    
    
    // Portfolio filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-filter li').on('click', function () {
        $("#portfolio-filter li").removeClass('filter-active');
        $(this).addClass('filter-active');
        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);

