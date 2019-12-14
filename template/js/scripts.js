function slickSlider(element,countSlide,arrow) {
    $(element).each(function () {
        $(this).slick({
            dots: false,
            autoplay: false,
            arrows: arrow,
            slidesToShow: countSlide,
            slidesToScroll: countSlide
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
        let link = $(this).find('a.linken-sphere').attr('href');
        document.location.href = link;
    });
}

function changeModalName(element) {
    $(element).click(function(){
        let linkName = $(this).text(),
            modal = $('#Modal'),
            emailInput = $('#Modal p.email'),
            messageInput = $('#Modal p.message'),
            modalName = $('#Modal h3'),
            modalTitle = $('#Modal p.subtitle');
        modalName.text(linkName);
        modalTitle.html('Оставляйте заявку!<br>Мы перезвоним вам в течении 10 минут');
        emailInput.hide();
        messageInput.hide();
        if (linkName === 'Напишите нам') {
            emailInput.show();
            messageInput.show();
            modalTitle.html('Заполняйте форму!<br>Мы ответим вам в течении 10 минут');
        }
        
        if (linkName === 'Задать вопрос продавцу') {
            emailInput.show();
            messageInput.show();
            modalTitle.html('Заполняйте форму!<br>Мы ответим вам в течении 10 минут');
            messageInput.find('textarea').attr('placeholder', 'Ваш вопрос');
        }
    });
}

$(function(){
    $('.fancybox').fancybox();
    slickSlider($('.slick-slider'),1,true);
    slickSlider($('.slick-product'),4,true);
    scrollTop();
    clickableLi($('.left-menu .wrapper li.item'));
    clickableLi($('.items.cat .product'));
    changeModalName($('.modal-button a'));
});
