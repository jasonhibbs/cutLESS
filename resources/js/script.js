// Helpers /////////////////////////////////////////////////////////
var $window = $(window);
var window_width = $window.width();


// Scripts /////////////////////////////////////////////////////////

// Menu Bar --------------------------------------------------------

// If we’re loading a narrow page, close the nav

$(function(){
  if(window_width <= 600) {
    $('.head nav ul').addClass('closed');
  }
});

// Toggle the menu
$('.menu_bar').click(function() {
  $('.head nav ul').toggleClass('closed');
});


// Resize //////////////////////////////////////////////////////////

$window.resize(function(){

  // Update window width
  window_width = $window.width();

  function breakpoint() {
    
  }

  // In case people are just testing our responsive skills, make sure the menu opens again…
  var w = $(window).width();
  if(w > 600 && $('.head nav ul')) {
    $('.head nav ul').removeClass('closed');
  }


});


// Load ////////////////////////////////////////////////////////////
$window.load(function () {
  
});