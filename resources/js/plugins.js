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