$(document).ready(function(){
    $(window).scroll(function(){
        // checks if windows is scrolled more than 500px, adds/removes solid class
        if($(this).scrollTop()>550){
            $('.navbar').addClass('solid');
            $('.back-to-top').addClass('visible');
        }else{
            $('.navbar').removeClass('solid');
            $('.back-to-top').removeClass('visible');
        }
    });
});

$(document).ready(function(){
    // add smooth scrolling to all links
    $("a").on('click', function(event){
        if(this.hash !== ""){
            // prevent default anchor click bahavior
            event.preventDefault();
            // Store hash
            var hash = this.hash;

            $('html, body').animate({
                scrolltop: $(hash).offset().scrollTop
            }, 800, function(){
                // add hash (#) to URL when donee scrolling (default click bahavior)
                window.location.hash = hash;
            });
        } // end if
    });
});