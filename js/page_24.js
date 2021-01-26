const _loading = $('.loading');
let loading_remove = setTimeout(function() {
    _loading.remove();
    _js_question = $('.js-question');
}, 1000);