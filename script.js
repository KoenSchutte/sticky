var scrollValue;
var lastOne = 0
var nav = $('nav');
var height = nav.outerHeight();

function verplaats() {
    scrollValue = $(this).scrollTop();
    if(scrollValue > lastOne) {
        lastOne=scrollValue;
        nav.css('top', -height + 'px')
    } else {
        lastOne=scrollValue;
        nav.css('top', 0);
    }
    
   
}

$(window).on('scroll', verplaats)