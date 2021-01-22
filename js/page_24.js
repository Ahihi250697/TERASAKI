const _technical_career = {
    number_of_application: "10名",
    job_description: "物件ごとの製品設計や、新製品の開発・研究",
    target_faculty: "電気系・電子系・機械系・材料系・情報工学系 他",
    target_school: "高専・4年制大学・大学院修士課程",
    plan_work: "主に大阪（国内・海外問わず転勤有）",
    start_salary: {
        college: 　 "183,950円",
        university: "209,750円",
        master: "221,050円"
    }
}


const _loading = $('.loading');
let loading_remove = setTimeout(function() {
    _loading.remove();
    _js_question = $('.js-question');
}, 1000);