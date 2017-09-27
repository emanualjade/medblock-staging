function initNavEffects() {
  var masthead = $('#masthead')
  $(window).scroll(function(){
    
    if ($(window).scrollTop() > 100) {
      masthead.addClass('is-active');
    } else {
      masthead.removeClass('is-active');
    }

  });
}

$( document ).ready(function() {
  initNavEffects();
});
