//@codekit-prepend "plugins.js"

// Helpers /////////////////////////////////////////////////////////
var $window = $(window);
var window_width = $window.width();
var breakpoint = 0;


// Functions /////////////////////////////////////////////////////////

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
    // Still thinking about it.
  }

  // In case people are just testing our responsive skills, make sure the menu opens again…
  if(window_width > 600 && $('.head nav ul')) {
    $('.head nav ul').removeClass('closed');
  }

});


// Loaded //////////////////////////////////////////////////////////
$window.load(function () {
  
});