$(function() {

  // Scroller

  $('nav ul a[href^=#]').on('click', function(event) {
    event.preventDefault();
    var $elementTarget = $(this).attr('href'),
      $destination = $($elementTarget).offset().top - headerHeight;

    $('body, html').animate({scrollTop: $destination}, 300, 'easeInExpo');
  });

  // Collapse menu

  $('.menu__toggle').on('click', function(e) {
    e.preventDefault();
    $('.menu ul').slideToggle(200, 'easeInExpo');
  });

  // Glide

  var $slider = $('.slider'),
      $slideTitle = $('.slide__title'),
      $slideDesc = $('.slide__desc');

  $slideTitle.first().addClass('fadeInUp');
  $slideDesc.first().addClass('fadeInUp');

  // Animation slide title

  var titleEffectIn = 'fadeInUp',
      titleEffectOut = 'fadeOutUp';


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
      $slideTitle.eq(-this.currentSlide).removeClass( titleEffectIn ).addClass( titleEffectOut );
      $slideDesc.eq(-this.currentSlide).removeClass( titleEffectIn ).addClass( titleEffectOut );

    },
    afterTransition: function() {
      $slideTitle.eq(-this.currentSlide).removeClass( titleEffectOut ).addClass( titleEffectIn );
      $slideDesc.eq(-this.currentSlide).removeClass( titleEffectOut ).addClass( titleEffectIn );
    }
  }).data('api_glide');

});