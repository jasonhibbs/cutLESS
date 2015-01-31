// PLUGINS                  ----------------------------------------


// Normalized address bar hiding for iOS & Android (c) @scottjehl MIT License
(function( win ){
  var doc = win.document;
  
  // If there's a hash, or addEventListener is undefined, stop here
  if( !location.hash && win.addEventListener ){
  
    //scroll to 1
    win.scrollTo( 0, 1 );
    var scrollTop = 1,
      getScrollTop = function(){
        return win.pageYOffset || doc.compatMode === "CSS1Compat" && doc.documentElement.scrollTop || doc.body.scrollTop || 0;
      },
      
      //reset to 0 on bodyready, if needed
      bodycheck = setInterval(function(){
        if( doc.body ){
          clearInterval( bodycheck );
          scrollTop = getScrollTop();
          win.scrollTo( 0, scrollTop === 1 ? 0 : 1 );
        }
      }, 15 );
    
    win.addEventListener( "load", function(){
      setTimeout(function(){
        //at load, if user hasn't scrolled more than 20 or so...
        if( getScrollTop() < 20 ){
          //reset to hide addr bar at onload
          win.scrollTo( 0, scrollTop === 1 ? 0 : 1 );
        }
      }, 0);
    }, false );
  }
})( this );


// Keep relative height on video iframes
$(function() {
    
  var $allVideos = $("iframe[src^='http://player.vimeo.com'], iframe[src^='http://www.youtube.com'], object, embed"),
  $fluidEl = $('figure');
        
  $allVideos.each(function() {
    
    $(this)
      .attr('data-aspectRatio', this.height / this.width)
      .removeAttr('height')
      .removeAttr('width');
  });
  
  $(window).resize(function() {
  
    var newWidth = $fluidEl.width();
    $allVideos.each(function() {
    
      var $el = $(this);
      $el.width(newWidth)
         .height(newWidth * $el.attr('data-aspectRatio'));
    });
  
  }).resize();

});


// Toggle ARIA /////////////////////////////////////////////////////
// Version: 0.2
$.fn.toggleARIA = function(opts) {

  var $el = $(this);
  var el_id = $el.attr('id') ? $el.attr('id') : 'element';
  
  var defaults = {
    toggle: '[aria-controls="' + el_id + '"]',
    binds: 'click',
    measure: true,
    onExpand: '',
    onCollapse: '',
    tidySelf: false,
    tidyOthers: '',
  };

  var options = $.extend( {}, $.fn.toggleARIA.defaults, defaults );

  var $toggle = (options.toggle) ? $(options.toggle) : $(defaults.toggle);
  var binds = (options.binds) ? options.binds : defaults.binds;
  
  var $html = $('html');
  var $window = $(window);
  
  var collapsed_class = el_id + '_collapsed';
  var expanded_class = el_id + '_expanded';

  // Functions
  function collapse(el) {
    el.attr('aria-expanded', 'false');
    $html.removeClass(expanded_class);
    $html.addClass(collapsed_class);
    
    if (typeof options.onCollapse === 'function') {
      options.onCollapse.call(this);
    }
  }
  
  function expand(el) {
    el.attr('aria-expanded', 'true');
    $html.removeClass(collapsed_class);
    $html.addClass(expanded_class);
    
    if (options.tidyOthers) {
      var others = options.tidyOthers.split(',');
      
      $.each(others, function(i, c) {
        var other = c.trim() + '_expanded';
        if ($html.hasClass(other) === true) {
          // Now collapse 'c'
        }
      });
    }
    
    if (typeof options.onExpand === 'function') {
      options.onExpand.call(this);
    }
  }
  
  function toggler(el) {
    if ( el.attr('aria-expanded') === 'true' ) {
      collapse(el);
    } else {
      expand(el);
    }
  }
  
  function checkMaxHeight(el) {
    var expanded = el.attr('aria-expanded');
    el.css('max-height', 'none');
    
    if (expanded === 'false') {
      el.attr('aria-expanded', true);
    }
    
    var h = el.outerHeight();
    el.css('max-height', h);
    
    if (expanded === 'false') {
      el.attr('aria-expanded', false);
    }
  }
  
  // Setup
  if ($toggle.is(':hidden')) {
    expand($el);
  } else {
    collapse($el);
  }
    
  if (options.measure) {
    checkMaxHeight($el); 
  }
  
  // Binds
  if (binds === 'hover') {
    // This hover option is not ready for the real world
    if ($el.children($toggle)) {      
      $toggle.mouseenter(function() {
        expand($el);
      });
      
      $el.mouseleave(function() {
        collapse($el);
      });
      
      $toggle.click(function() {
        collapse($el);
      });
    
    } else {
      $toggle.hover(function() {
        toggler($el);
      }); 
    }

    // Not actually sure why this works…    
    $toggle.on('touchend', function() {
      expand($el);
      $toggle.off('mouseenter');
    });
    
  } else {
    // Default to click
    $toggle.click(function() {
      toggler($el);
    });
    
    if (options.tidySelf) {
      $el.mouseleave(function() {
        collapse($el);
      });
    } 
  }
  
  // Might be a better way to do this…
  if (options.tidySelf) {
    $('.content').on('mouseup touchstart', function() {
      collapse($el);
    });
  }

  $window.resize(function() {
    if ($toggle.is(':hidden')) {
      expand($el);
    }
    
    if (options.measure) {
      checkMaxHeight($el); 
    }
  });
};


// Find existing ARIA controls in the page
$(document).ready(function() {
  var presets = $('[aria-controls]');
  presets.each(function() {
    var el = $(this).attr('aria-controls');
    $('#' + el).addClass('no-transition');
    $('#' + el).toggleARIA({});
    setTimeout(function() {
      $('#' + el).removeClass('no-transition');
    }, 1);
  });
});