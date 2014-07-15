$(function() {

  // Scroller

  $('nav ul a[href^=#]').on('click', function(event) {
    event.preventDefault();
    var elementTarget = $(this).attr('href'),
        headerHeight = $('.header').height(),
        destination = $(elementTarget).offset().top - headerHeight;

    $('body, html').animate({scrollTop: destination}, 300, 'easeInExpo');
  });

  // Collapse menu

  $('.menu__toggle').on('click', function(e) {
    e.preventDefault();
    $('.menu ul').slideToggle(200, 'easeInExpo');
  });

  // Glide

  var $slider = $('.slider .container'),
      $slideTitle = $('.slide__title'),
      $slideDesc = $('.slide__desc'),
      $slideButtonLeft = $('.slide__button_left'),
      $slideButtonRight = $('.slide__button_right'),
      $slideImage = $('.slide img');

  $slideTitle.first().addClass('fadeInUp');
  $slideDesc.first().addClass('fadeInUp'),
  $slideButtonLeft.first().addClass('fadeInLeft'),
  $slideButtonRight.first().addClass('fadeInRight'),
  $slideImage.first().addClass('fadeInUp');

  // Animation slide title

  var titleEffectIn = 'fadeInUp',
      buttonLeftEffectIn = 'fadeInLeft',
      buttonRightEffectIn= 'fadeInRight';


  $slider.glide({
    arrows: true,
    arrowRightText: '<i class="icon-arrow-right">',
    arrowLeftText: '<i class="icon-arrow-left">',
    arrowsWrapperClass: 'slider__arrows',
    arrowMainClass: 'slider__arrow',
    arrowRightClass: 'slider__arrow_right',
    arrowLeftClass: 'slider__arrow_left',
    navigation: false,
    autoplay: 5000,
    circular: false,
    beforeTransition: function() {
      $slideTitle.eq(-this.currentSlide).removeClass( titleEffectIn );
      $slideDesc.eq(-this.currentSlide).removeClass( titleEffectIn );
      $slideButtonLeft.eq(-this.currentSlide).removeClass( buttonLeftEffectIn );
      $slideButtonRight.eq(-this.currentSlide).removeClass( buttonRightEffectIn );
      $slideImage.eq(-this.currentSlide).removeClass( titleEffectIn );

    },
    afterTransition: function() {
      $slideTitle.eq(-this.currentSlide).addClass( titleEffectIn );
      $slideDesc.eq(-this.currentSlide).addClass( titleEffectIn );
      $slideButtonLeft.eq(-this.currentSlide).addClass( buttonLeftEffectIn );
      $slideButtonRight.eq(-this.currentSlide).addClass( buttonRightEffectIn );
      $slideImage.eq(-this.currentSlide).addClass( titleEffectIn );
    }
  }).data('api_glide');


  // Equal height services item

  function setEqualHeight(columns) {
    var tallestcolumn = 0;
        
    columns.removeAttr('style');

    columns.each(function() {
      var currentHeight = $(this).height();

      if(currentHeight > tallestcolumn) {
        tallestcolumn  = currentHeight;
      }
    });

    columns.height(tallestcolumn);
  }

  setEqualHeight($(".service"));
  
  $(window).resize(function() {
    setEqualHeight($(".service"));
  });

  // Animation

  if (Modernizr.cssanimations) {
    $('.animated').css('opacity', 0);
  }

  $('.wow').waypoint(function() {
    var $animated = $(this).find('.animated');

    $animated.each(function() {
      $(this)
        .toggleClass( $(this).attr('data-animate') )
        .css({
          'animation-delay' : $(this).attr('data-delay') + 'ms'
        });
    });

  }, {
   offset: '75%' // bottom-in-view
  });

    // Isotope

  $('.portfolio__content').isotope({
    animationEngine : 'best-available',
    itemSelector : '.portfolio__thumbnail',
    layoutMode : 'fitRows'
  });


  // Project Filtering

  projectFilterInit();

  function projectFilterInit() {

    $('.portfolio__filter a').on('click', function(){
      var selector = $(this).attr('data-filter');
      var container = $('.portfolio__content');

      container.isotope({
        filter: selector
      });

      if (!$(this).hasClass('selected') ) {
        $(this).parents('.portfolio__filter').find('.selected').removeClass('selected');
        $(this).addClass('selected');
      }

      return false;
    });
  }

});