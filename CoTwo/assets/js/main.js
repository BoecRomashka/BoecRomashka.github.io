
let nav = $('#nav');
let navToggle = $('#navToggle');
let header = $('#header');
let intro = $('#intro');
let introHeight = intro.innerHeight();
let scrollPos = $(window).scrollTop();


  // Fixed Header
  checkScroll(scrollPos, introHeight);

  $(window).on('scroll resize', function() {
    introHeight = intro.innerHeight();
    scrollPos = $(this).scrollTop();

    checkScroll(scrollPos, introHeight);
  });

  function checkScroll(scrollPos, introHeight) {
    if(scrollPos > introHeight) {
      header.addClass('fixed');      
    } else {
      header.removeClass('fixed');
    }
  }

  // Smooth scroll
  $('[data-scroll]').on('click', function(event) {
    event.preventDefault();

    let elementId = $(this).data('scroll');
    let elementOffset = $(elementId).offset().top;

    nav.removeClass('show');

    $('html, body').animate({
      scrollTop: elementOffset - 70
    }, 700);
  });

  // Nav Toggle


  navToggle.on('click', function(event) {
    event.preventDefault();
    nav.toggleClass('show');
  });


// $document.ready( function() {

// });