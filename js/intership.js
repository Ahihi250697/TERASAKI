$(function() {
	$.each($('.intership-nav__title'), function(){
		$(this).parent().hasClass('active')?null:$(this).next().slideUp(0);
	});

	$('.intership-nav__title').on('click', function(){
		if($(this).parent().is('.active')){
			$(this).parent().removeClass('active');
		}else{
			$(this).parent().addClass('active');
		}
		$(this).next().slideToggle(300);
	});

	$('.intership-slide__slide').slick({
		infinite: true,
		slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        dots: true,
        arrows: true,
        prevArrow: '<a href="#prevArrow" class="btn-arrow btn-arrow-left"><span></span></a>',
	    nextArrow:'<a href="#nextArrow" class="btn-arrow btn-arrow-right"><span></span></a>',
	    responsive: [
            {
              breakpoint: 1023,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows: false,
                }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows: false,
                }
            },
        ]
	});
});