// 이벤트 기획전 슬라이드 

$(function(){


	function prev() {
		$(".sellBookBannerSlide ul li:last").prependTo('.sellBookBannerSlide ul');
		$(".sellBookBannerSlide ul").css({marginLeft:-320});
		$(".sellBookBannerSlide ul").stop().animate({marginLeft:0},"slow");
	}

	function next(){
		$(".sellBookBannerSlide ul").stop().animate({marginLeft:-320},"slow",function(){
			$(".sellBookBannerSlide ul li:first").appendTo('.sellBookBannerSlide ul');
			$(".sellBookBannerSlide ul").css({marginLeft:0},);
		});
	}

	function subBannerSlide(){
		$('.sellBookBannerSlide ul').stop().animate({marginLeft:-320},"slow",function(){
			$(".sellBookBannerSlide ul li:first").appendTo('.sellBookBannerSlide ul');
			$(".sellBookBannerSlide ul").css({marginLeft:0});
		});
	}

	
	
	setInterval(subBannerSlide,5000);
	


	$('.sellBookBannerSlide .fprev').click(function(){
		prev();
	});

	$('.sellBookBannerSlide .fnext').click(function(){
		next();
	});

});