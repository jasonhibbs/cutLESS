//@codekit-prepend "plugins.js"

// Helpers /////////////////////////////////////////////////////////
var $window = $(window);
var window_width = $window.width();


// Functions ///////////////////////////////////////////////////////

// Primary Navigation Menu -----------------------------------------

// Close the nav before the page loads
$('.head nav')
  .attr('aria-expanded', 'false')
  .removeClass('closed');


// Toggle the nav
$('.menu_bar').click(function() {
  if ( $('.head nav').attr('aria-expanded') === 'true' ) {
    $('.head nav').attr('aria-expanded', 'false');
  } else {
    $('.head nav').attr('aria-expanded', 'true');
  }
});


// Resize //////////////////////////////////////////////////////////
$window.resize(function(){

  // Update window width
  window_width = $window.width();

  // Correct ARIA state for nav when necessary
  if ( $('[aria-controls="primary_nav"]').is(':hidden') ) {
    $('.head nav').attr('aria-expanded', 'true');
  }
  
});


// Loaded //////////////////////////////////////////////////////////
$window.load(function () {
  
});