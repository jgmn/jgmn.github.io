
(function ($) {
    "use strict";
    
    function sliders() {
        if ($.fn.owlCarousel) {
            var homeSlider = $('.home_slider');
            homeSlider.owlCarousel({
                items: 1,
                dots: false,
                loop: true,
                nav: true,
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                animateIn: 'fadeIn',
                animateOut: 'fadeOut',
                touchDrag: false,
                mouseDrag: false
            });
            
            homeSlider.on('translate.owl.carousel', function () {
                $(this).find('.owl-item .home_content > div > *').removeClass('fadeInUp animated').css('opacity','0');
            });
            homeSlider.on('translated.owl.carousel', function () {
                $(this).find('.owl-item.active .home_content > div > *').addClass('fadeInUp animated').css('opacity','1');
            });
            
            var tstSlider = $('.tst_slider');
            tstSlider.owlCarousel({
                dots: false,
                loop: true,
                nav: false,
                margin: 50,
                responsive: {
                    0: {
                        items: 1
                    },
                    992: {
                        items: 3
                    }
                }
            });
            
            var brandSlider = $('.brand_slider');
            brandSlider.owlCarousel({
                dots: false,
                loop: true,
                nav: false,
                items: 6,
                margin: 30,
                responsive: {
                    0: {
                        items: 2
                    },
                    480: {
                        items: 4
                    },
                    992: {
                        items: 6
                    }
                }
            });
        }
    }

    function plugins() {
        $(window).stellar();
        
        $('select').niceSelect();
        
        $('.videoBtn').magnificPopup({
            disableOn: 0,
            type: 'iframe',
            mainClass: 'mfp-zoom',
            removalDelay: 160,
            preloader: true,
            fixedContentPos: false
        });
        $('nav ul.menu').slicknav({
            appendTo: '.menu_col'
        });
        
        new WOW().init();
    }
    
    function pluginsWl() {
        
        $('.masonry-wrap').masonry({
          itemSelector: '.masonry-grid'
        });
    }

    function customCode() {
        $('.sub-menu').siblings('a').addClass('sub-siblings');
        $('.mega-menu').siblings('a').closest('li').addClass('mega-par');
        $('.search_icon, .search_close').on('click', function() {
            $('.search_form').toggleClass('active');
        });
        
        $('.mega-menu').siblings('a').closest('li').on('click', function() {
            $('this').find('.menu-column').css('display','block');
        });
        
        $(window).on('scroll',function(){
            if($(window).scrollTop()>100){
                $('.stick_header').addClass('sticky');
                
                var header_hei = $('header .header_btm').height();
                $('.sticky-anchor').height(header_hei);
            }
            else{
                $('.stick_header').removeClass('sticky');
                $('.sticky-anchor').height('');
            }
        });

    }
    
    function heightConfig() {
        
        var sth = -1;
        $('.sth').each(function () {
            if ($(this).height() > sth) {
                sth = $(this).height();
            }
        });
        $('.sth').height(sth);
        
        var vdo_h = -1;
        $('.vdo_h').each(function () {
            if ($(this).height() > vdo_h) {
                vdo_h = $(this).height();
            }
        });
        $('.vdo_h').height(vdo_h);
        
        var form_h = -1;
        $('.form_h').each(function () {
            if ($(this).height() > form_h) {
                form_h = $(this).height();
            }
        });
        $('.form_h').height(form_h);
        
    }
    
    function accordion() {
        var dd = $('dd');
        dd.filter(':nth-child(n+4)').hide();
        $('dl.accordion').on('click', 'dt', function(){
            $(this)
            .addClass('active')
            .siblings('dt')
            .removeClass('active');

            $(this)
                .next()
                .slideDown()
                .siblings('dd')
                .slideUp();
        });
    }
    
    function site_preloader(){
        $('.site_preloader').fadeOut(2000, function () {
            $(this).remove();
        });
    }
    function slider_preloader(){
        $('.slider_preloader').fadeOut(2000, function () {
            $(this).remove();
        });
    }
    
    $(document).ready(function () {
        plugins();
        customCode();
        accordion();
        sliders();
        heightConfig();
        site_preloader();
    });
    
    $(window).load(function () {
        heightConfig();
        pluginsWl();
        slider_preloader();
    });
    
    
})(jQuery);