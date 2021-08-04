// 라이브북 슬라이드

$(function(){


	function prev() {
		$(".liveBookSlide ul li:last").prependTo('.liveBookSlide ul');
		$(".liveBookSlide ul").css({marginLeft:-690});
		$(".liveBookSlide ul").stop().animate({marginLeft:0},"slow");
	}

	function next(){
		$(".liveBookSlide ul").stop().animate({marginLeft:-690},"slow",function(){
			$(".liveBookSlide ul li:first").appendTo('.liveBookSlide ul');
			$(".liveBookSlide ul").css({marginLeft:0},);
		});
	}

	


	$('.liveBookSlide .fprev').click(function(){
		prev();
	});

	$('.liveBookSlide .fnext').click(function(){
		next();
	});

});


// 라이브북 modal img

