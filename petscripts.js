//Masthead resizer, significantly adapted from fittext.js by Dave Rupert
$(function() {
    var $masthead = $('#masthead'),
        resizer = function() {
            if ($masthead.width() > 400) {
                $masthead.find('h1').css('font-size', Math.round($masthead.width() / 4));
                //number above will change font size (higher=smaller)
            }
        };
    resizer();
    $(window).on('resize orientationchange', resizer);
});
//Subscribe popup
$('#sub-link').click(function (e) {
    $('#sub-opt').toggle(100);
    e.preventDefault();
});
//Social sharing popup
    // open popup
    $('.social-button').click(function(e) {
        $(this).parents('.share-links').siblings('.social-pop').toggle(100);
        e.preventDefault();
    });
    //close popup
    $('.social-close').click(function() {
        $(this).parent().hide(100);
    });
    //Select short URL text
    $('.short-url').on('click', 'input', function() {
        $(this).focus().select()
    });
//Hide post footer on Ask page
if (window.location.pathname == '/ask') {
    $('.post-footer').addClass('hide');
}
//SVG image replacement
if (!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")) {
    $('.like_button').addClass('sprite').css('background-position', '-165px -43px');
    $('.reblog_button').addClass('sprite').css('background-position', '-185px -44px');
}