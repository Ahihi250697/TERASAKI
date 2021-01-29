const __js_tabpage = $('.js-tabpage');
const __js_tabarea = $('.js-tab-area');

__js_tabpage.click(function(e) {
    e.preventDefault();
    let _open_tab = $(this).attr('data-tab');

    if ($(_open_tab).hasClass('active')) {
        return false;
    } else {
        __close("none");
        $(_open_tab).addClass('active');
        $(_open_tab).slideDown(300);
    }


});

function __close(_ch) {
    if (_ch == "start") {
        $.each(__js_tabarea, function() {
            $(this).hasClass('active') ? null : $(this).slideUp(0);
        });
    } else {
        $.each(__js_tabarea, function() {
            $(this).hasClass('active') ? $(this).removeClass('active').slideUp(0) : $(this).slideUp(0);
        })
    }

    console.log('_open_tab');
}

__close("start");