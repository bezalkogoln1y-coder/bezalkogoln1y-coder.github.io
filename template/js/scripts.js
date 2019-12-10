function slickSlider() {
    $('.slick-slider').each(function () {
        $(this).slick({
            dots: false,
            autoplay: false
        });
    });
}

function scrollTop() {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('#topNav').fadeIn();
        } else {
            $('#topNav').fadeOut();
        }
    });
    
    $('#topNav').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 600);
        return false;
    });
}

function clickableLi(element) {
    $(element).click(function(e){
        e.preventDefault;
        let link = $(this).children('a').attr('href');
        document.location.href = link;
    });
}

$(function(){
    slickSlider();
    scrollTop();
    clickableLi($('.left-menu .wrapper li.item'));
});
