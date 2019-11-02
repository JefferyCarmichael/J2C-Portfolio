
    $(document).ready(function(){
        var topoffset = 65;
        
         //Use smooth scrolling when clicking on navigation
      $('.navbar a[href*=\\#]:not([href=\\#])').click(function() {
        if (location.pathname.replace(/^\//,'') === 
          this.pathname.replace(/^\//,'') && 
          location.hostname === this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate( function(){
              scrollTop: target.offset().top-topoffset+2
            }, 500);
            return false;
          } //target.length
        } //click function
      }); //smooth scrolling
    
    // navbar background color change on scroll

    $(window).scroll(function(){
            $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
            $('#pageFooter').toggleClass('scrolled2', $(this).scrollTop() >50);
    });

//  Highlights menu sections during scroll
    $('body').scrollspy({ target: "#nav1" });


});