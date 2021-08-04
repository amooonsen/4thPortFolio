
// 시,에세이 분야 슬라이드 

$(function(){


	function prev() {
		$(".relatedMostListWrap:first ul:last").prependTo('.relatedMostListWrap:first ');
		$(".relatedMostListWrap:first ").css({marginLeft:-1150});
		$(".relatedMostListWrap:first ").stop().animate({marginLeft:0},"slow");
	}

	function next(){
		$(".relatedMostListWrap:first").stop().animate({marginLeft:-1150},"slow",function(){
			$(".relatedMostListWrap:first ul:first").appendTo('.relatedMostListWrap:first');
			$(".relatedMostListWrap:first").css({marginLeft:0});
		});
	}

	


	$('.subBookRelatedMost:first-of-type > .fprev').click(function(){
		prev();
	});

	$('.subBookRelatedMost:first-of-type >  .fnext').click(function(){
		next();
	});

});

// 이 책을 조회한 회원들이 같이 본 책 슬라이드

$(function(){


	function prev() {
		$(".relatedMostListWrap:eq(1) ul:last").prependTo('.relatedMostListWrap:eq(1) ');
		$(".relatedMostListWrap:eq(1)").css({marginLeft:-1150});
		$(".relatedMostListWrap:eq(1)").stop().animate({marginLeft:0},"slow");
	}

	function next(){
		$(".relatedMostListWrap:eq(1)").stop().animate({marginLeft:-1150},"slow",function(){
			$(".relatedMostListWrap:eq(1) ul:first").appendTo('.relatedMostListWrap:eq(1)');
			$(".relatedMostListWrap:eq(1)").css({marginLeft:0});
		});
	}

	


	$('.subBookRelatedMost:eq(1) .fprev').click(function(){
		prev();
	});

	$('.subBookRelatedMost:eq(1) .fnext').click(function(){
		next();
	});

});


// 이 책을 구매한 회원들이 같이 본 책 슬라이드

$(function(){


	function prev() {
		$(".relatedMostListWrap:eq(2) ul:last").prependTo('.relatedMostListWrap:eq(2)');
		$(".relatedMostListWrap:eq(2)").css({marginLeft:-1150});
		$(".relatedMostListWrap:eq(2)").stop().animate({marginLeft:0},"slow");
	}

	function next(){
		$(".relatedMostListWrap:eq(2)").stop().animate({marginLeft:-1150},"slow",function(){
			$(".relatedMostListWrap:eq(2) ul:first").appendTo('.relatedMostListWrap:eq(2)');
			$(".relatedMostListWrap:eq(2)").css({marginLeft:0});
		});
	}

	


	$('.subBookRelatedMost:eq(2) .fprev').click(function(){
		prev();
	});

	$('.subBookRelatedMost:eq(2) .fnext').click(function(){
		next();
	});

});
