function initNavEffects() {
  var navbar = $('.navbar')
  $(window).scroll(function(){
    
    if ($(window).scrollTop() > 100) {
      navbar.addClass('is-active');
    } else {
      navbar.removeClass('is-active');
    }

  });
}

$( document ).ready(function() {
  initNavEffects();
});
