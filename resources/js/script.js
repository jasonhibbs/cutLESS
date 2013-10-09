// Helpers /////////////////////////////////////////////////////////
var $window = $(window);
var window_width = $window.width();
var breakpoint = 0;


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
  if(window_width > 600 && $('.head nav ul')) {
    $('.head nav ul').removeClass('closed');
  }


});


// Load ////////////////////////////////////////////////////////////
$window.load(function () {
  
  // Animate scrolling on Hash Links (minus @baselineheight * 2)
  $(".head nav li a").click(function(e){
    e.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top - 48}, 400);
  });
  
});