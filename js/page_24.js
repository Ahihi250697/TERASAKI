const __js_goto = $('.js-goto');

__js_goto.on('click', function(e) {
    e.preventDefault();
    let _goto = $(this).attr('href');
    let _h = $(_goto).offset().top - 100;
    $('html, body').animate({
        scrollTop: _h
    }, 1000);
})