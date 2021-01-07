const _data_selection_recruitment = [
    // {
    //     Question: "既卒ですが、応募することは可能ですか？",
    //     Answer: "応募は可能です。新卒採用では募集をしておりませんので、中途採用での応募をお願いします。",
    // },
    // {
    //     Question: "ジョブローテーションはできますか？",
    //     Answer: "none",
    // },
    {
        Question: "理系・文系などの学歴は関係ありますか？",
        Answer: "none",
    }, {
        Question: "女性が採用において不利益な扱いを受けることはありますか?",
        Answer: "none",
    }, {
        Question: "障がいを持っているのですが、採用は行っていますか？?",
        Answer: "none",
    }, {
        Question: "応募資格について教えてください。?",
        Answer: "none",
    }, {
        Question: "どのような職種を募集していますか。?",
        Answer: "none",
    }, {
        Question: "エンジニア採用と営業採用の違いがありますか？?",
        Answer: "none",
    }, {
        Question: "どのようなプロジェクトがありますか？?",
        Answer: "none",
    }, {
        Question: "応募から内定までどのくらいかかりますか？?",
        Answer: "none",
    }, {
        Question: "女性も活躍できますか。?",
        Answer: "none",
    }, {
        Question: "新卒採用と中途採用で待遇に違いはありますか？?",
        Answer: "none",
    }
];

const _data_selection_graduate = [{
        Question: "留学生ですが、応募することは可能でしょうか？",
        Answer: "可能です。一般の学生と同様に選考させていただきます。（留学生枠は設けておりません。）",
    },
    {
        Question: "海外の大学を卒業する予定ですが、応募することは可能でしょうか？",
        Answer: "none",
    },
    {
        Question: "OB・OG訪問は可能でしょうか？",
        Answer: "none",
    }, {
        Question: "会社案内などの資料を送っていただけますか？?",
        Answer: "none",
    }, {
        Question: "応募から内定までどのくらいかかりますか？?",
        Answer: "none",
    }, {
        Question: "会社説明会で試験や面接などはありますか。?",
        Answer: "none",
    }, {
        Question: "初任の配属先はどのようにして決められますか？?",
        Answer: "none",
    }, {
        Question: "入社後の流れを教えてください。?",
        Answer: "none",
    }, {
        Question: "研修ではどのようなことをするのですか?",
        Answer: "none",
    }, {
        Question: "文系出身ですが大丈夫でしょうか?",
        Answer: "none",
    }, {
        Question: "選考では交通費は出ますか?",
        Answer: "none",
    }, {
        Question: "なにか技術資格は必要ですか?",
        Answer: "none",
    }
];

const _data_selection_welfare = [{
        Question: "育児関連制度は取得しやすいですか？",
        Answer: "",
    },
    {
        Question: "休暇について教えてください。",
        Answer: "none",
    },
    {
        Question: "病気の予防・検診に関する制度はありますか？",
        Answer: "none",
    }, {
        Question: "資格取得の補助などはありますか?",
        Answer: "none",
    }, {
        Question: "そのほかの福利厚生制度について教えてください。?",
        Answer: "none",
    }
];




const _selection_question = '<div class = "selection__question">';
const _question_area = '<div class = "question-area js-question">';
const _icon_Q = '<div class = "icon-question" > Q. </div>';
const _question = '<div class = "question">';
const _icon_open = '<div class = "icon-open" ></div>';
const _close_div = '</div>'
const _answer_area = '<div class = "answer-area" >';
const _icon_A = '<div class = "icon-answer" > </div>';
const _answer = '<div class = "answer" >';


const _js_selection_recruitment = $('.js-selection__recruitment');
const _js_selection_graduate = $('.js-selection__graduate');
const _js_selection_welfare = $('.js-selection__welfare');


$.each(_data_selection_recruitment, function(i, v) {
    let _d =
        _selection_question +
        _question_area +
        _icon_Q +
        _question + v.Question + _close_div +
        _icon_open +
        _close_div +
        // _answer_area +
        // _icon_A +
        // _answer + v.Answer + _close_div +
        // _close_div +
        _close_div;
    _js_selection_recruitment.append(_d);
});

$.each(_data_selection_graduate, function(i, v) {
    let _d =
        _selection_question +
        _question_area +
        _icon_Q +
        _question + v.Question + _close_div +
        _icon_open +
        _close_div +
        // _answer_area +
        // _icon_A +
        // _answer + v.Answer + _close_div +
        // _close_div +
        _close_div;
    _js_selection_graduate.append(_d);
});

$.each(_data_selection_welfare, function(i, v) {
    let _d =
        _selection_question +
        _question_area +
        _icon_Q +
        _question + v.Question + _close_div +
        _icon_open +
        _close_div +
        // _answer_area +
        // _icon_A +
        // _answer + v.Answer + _close_div +
        // _close_div +
        _close_div;
    _js_selection_welfare.append(_d);
});

var _js_question = $('.js-question');
_js_question.on('click', function() {
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
    } else {
        $(this).addClass('active');
    }
});

const _loading = $('.loading');
let loading_remove = setTimeout(function() {
    _loading.remove();
    _js_question = $('.js-question');
}, 2000);

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