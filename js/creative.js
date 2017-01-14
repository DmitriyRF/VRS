(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    // Эта функция делает анимацию при клике на ссылку
    // Необходима отдельная библеотека
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    //Делает активным пункты меню при прокрутке
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    // Как то работает с меню
    //Вызывает событие click, у выбранных элементов страницы. Метод является аналогом trigger("click").
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    // Функуия bootstrap которая что то делает с меню пр прокрутке на 100px
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize and Configure Scroll Reveal Animation
    // Срабатывает анимация когда объект появляется на экране
    // В не зависимости от вида прокрутки
    window.sr = ScrollReveal();
    sr.reveal('.sr-icons', { // 4 иконки в секции At Your Service
        duration: 600,
        scale: 0.3,
        distance: '0px',
        reset: true
    }, 200);
    sr.reveal('.sr-button', { //кнопка появляется при прокрутке
        duration: 1000,
        delay: 200,
        reset: true
    });
    sr.reveal('.sr-contact', {
        duration: 600, //продолжительность
        scale: 0.3, //масштаб
        distance: '0px',
        reset: true
    }, 300);

    // Initialize and Configure Magnific Popup Lightbox Plugin
    // Настройка popup
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });

})(jQuery); // End of use strict
