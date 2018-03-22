$(function(){
	var navBg = $('#menu'),
		logo = $('.logo a'),
		menuList = $('.navlist li a ');

	$(window).scroll(function(){
		if($(this).scrollTop() > 0){
			navBg.css('background', '#fff');
			logo.css({
				'color' : "#17baef",
				'transition' : 'all .4s'
			});
			menuList.css('color', '#333');
		} else {
			navBg.css('background', 'transparent');
			logo.css({
				'color' : "#fff",
				'transition' : 'all .4s'
			});
			menuList.css('color', '#eee');
		}
	});
});