"use strict";
jQuery(document).ready(function ($) {
    
    // main-menu-scroll

    $(window).scroll(function () {
        var top = jQuery(document).scrollTop();
        var height = 300;

        if (top > height) {
            $('.navbar-fixed-top').addClass('menu-scroll');
        } else {
            $('.navbar-fixed-top').removeClass('menu-scroll');
        }
    });
    
    // scroll Up
    
    $('.scrollUp').hide();

    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            $('.scrollUp').fadeIn('slow');
        } else {
            $('.scrollUp').fadeOut('slow');
        }
    });
    $('.scrollUp').click(function () {
        $("html, body").animate({scrollTop: 0}, 1000);
        return false;
    });
    
    // menu active
    
    jQuery(window).scroll(function(){
         var $sections = $('.siteSection');
	$sections.each(function(i,el){
        var top  = $(el).offset().top-100;
        var bottom = top +$(el).height();
        var scroll = $(window).scrollTop();
        var id = $(el).attr('id');
    	if( scroll > top && scroll < bottom){
            $('a.active').removeClass('active');
			$('a[href="#'+id+'"]').addClass('active');

        }
    })
 });
    
    // smooth menu scrolling
    
    $(".nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 800);
    });

    // touch for carousel
    $(".carousel").on("touchstart", function(event){
      var xClick = event.originalEvent.touches[0].pageX;
      $(this).one("touchmove", function(event){
        var xMove = event.originalEvent.touches[0].pageX;
        if( Math.floor(xClick - xMove) > 5 ){
          $(this).carousel('next');
        }
        else if( Math.floor(xClick - xMove) < -5 ){
          $(this).carousel('prev');
        }
      });
      $(".carousel").on("touchend", function(){
        $(this).off("touchmove");
      });
    });

    // magnificPopup

    $('.portfolio-img').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
    });

	  $('.popup-vimeo').magnificPopup({
		  disableOn: 700,
		  type: 'iframe',
		  mainClass: 'mfp-fade',
		  removalDelay: 160,
		  preloader: false,
		  fixedContentPos: false
	  });

	  // tooltip for form
	  $('[data-toggle="tooltip"]').tooltip({
		    delay: { show: 300, hide: 1000 }
	  });

	// Mobile menu
    
    $(".navbar-collapse").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top-20}, 500);
        $('.navbar-collapse').collapse('hide');
    });
    
    animation
    
    $('.ourStoryLogo').addClass("hiddenBlock").viewportChecker({
        classToAdd: 'visibleBlock animated fadeInLeft',
        offset: 100
    });

    $('.ourStoryContent').addClass("hiddenBlock").viewportChecker({
        classToAdd: 'visibleBlock animated fadeInRight',
        offset: 100
    });

    $('.ourStoryVideoRow').addClass("hiddenBlock").viewportChecker({
        classToAdd: 'visibleBlock animated fadeIn',
        offset: 100
    });

    $('.expertiseUnit').addClass("hiddenBlock").viewportChecker({
        classToAdd: 'visiblev animated fadeIn',
        offset: 100
    });

    $('.ourTeamCol').addClass("hiddenBlock").viewportChecker({
        classToAdd: 'visibleBlock animated slideInUp',
        offset: 100
    });

    $('.ourWorksItem').addClass("hiddenBlock").viewportChecker({
        classToAdd: 'visibleBlock animated zoomIn',
        offset: 100
    });

    $('.quotesSliderRow').addClass("hiddenBlock").viewportChecker({
        classToAdd: 'visibleBlock animated fadeIn',
        offset: 150
    });

    $('.formWrap').addClass("hiddenBlock").viewportChecker({
        classToAdd: 'visibleBlock animated fadeInLeft',
        offset: 100
    });

    $('.clientWrap').addClass("hiddenBlock").viewportChecker({
        classToAdd: 'visibleBlock animated fadeInRight',
        offset: 100
    });

    $('.footerWrap').addClass("hiddenBlock").viewportChecker({
        classToAdd: 'visiblev animated fadeIn',
        offset: 100
    });

    $('.helpAndPrivacyBlock').addClass("hiddenBlock").viewportChecker({
        classToAdd: 'visibleBlock animated fadeInLeft',
        offset: 5
    });

    $('.copyrightBlock').addClass("hiddenBlock").viewportChecker({
        classToAdd: 'visibleBlock animated fadeInRight',
        offset: 5
    });
    
    $('#username').oninvalid = function(event) {
        event.target.setCustomValidity('Username should only contain lowercase letters. e.g. john');
    }
});