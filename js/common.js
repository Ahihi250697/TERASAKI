const _hamburger = $('.hamburger');
const _nav_bar = $('.nav__navbar');
const _nav_mark = $('.nav-mark');

_hamburger.on('click', function() {
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        _nav_bar.removeClass('active');
    } else {
        $(this).addClass('active');
        _nav_bar.addClass('active');
    }
});
_nav_mark.on('click', function() {
    _hamburger.removeClass('active');
    _nav_bar.removeClass('active');
});

const _loading = $('.loading');
let loading_remove = setTimeout(function() {
    _loading.remove();
    _js_question = $('.js-question');
}, 500);