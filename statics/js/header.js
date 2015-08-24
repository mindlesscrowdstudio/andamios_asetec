$(function(){
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();

		if (scroll >= 500){
			$(".header").addClass("smaller");
		}else{
			$(".header").removeClass("smaller");
		}

	});
});


/*$(function(){
	var shrink = 200;
	$(window).scroll(function() {
		var scroll = getCurrentScroll();
			if (scroll >= shrink ){
				$('header').addClass('.smaller');

			}
			else {
				$('header').removeClass('.smaller');
							}
	});
	function getCurrentScroll(){
		return window.pageYOffset || document.documentElement.scrollTop;
	}
});*/
