// Menu Bar ////////////////////////////////////////////////////////

// If we’re loading a narrow page, close the nav

$(function(){
  var w = $(window).width();
  if(w <= 600) {
    $('.head nav ul').css('display', 'none');
  }
});

// Toggle the menu
$('.menu_bar').click(function() {
  $('.head nav ul').slideToggle('slow');
});

// In case people are just testing our responsive skills, make sure the menu opens again…
$(window).resize(function(){
  var w = $(window).width();
  if(w > 600 && $('.head nav ul[style]')) {
    $('.head nav ul').removeAttr('style');
  }
});