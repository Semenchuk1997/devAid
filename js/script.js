$(function(){
	var navBg = $('#menu');
	$(window).scroll(function(){
		if($(this).scrollTop() > 0){
			navBg.css({
				'background' : '#fff',
			});
		};
	});
});