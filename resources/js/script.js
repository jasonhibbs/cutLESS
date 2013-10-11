//@codekit-prepend "plugins.js"

// Helpers /////////////////////////////////////////////////////////
var $window = $(window);
var window_width = $window.width();
var breakpoint = 0;


// Scripts /////////////////////////////////////////////////////////

// Menu Bar --------------------------------------------------------

// If we’re loading a narrow page, close the nav

$(function(){
  if(window_width <= 600) {
    $('nav.dropper ul').addClass('closed');
    $('.drawer_layout').removeClass('unwrap');
  }
});

// Toggle the menu
$('.menu_bar').click(function() {
  $('nav.dropper ul').toggleClass('closed');
  $('.drawer_layout').toggleClass('unwrap');
});


// Resize //////////////////////////////////////////////////////////

$window.resize(function(){

  // Update window width
  window_width = $window.width();

  function breakpoint() {
    
  }

  // In case people are just testing our responsive skills, make sure the menu opens again…
  if(window_width > 600) {
    $('nav.dropper ul').removeClass('closed');
    //$('body').addClass('unwrap');
  }


});


// Load ////////////////////////////////////////////////////////////
$window.load(function () {
  
  
  
});