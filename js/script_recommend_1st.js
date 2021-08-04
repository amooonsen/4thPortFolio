

// 베스트셀러 오늘,주간 클릭

// Week, 주간 클릭 시 실행

$(function(){

	let i=0;
	$(".bestSellerWeek").click(function(){
		i=($(this).index())+1
		$(".bestSellerRankList > ul:first").hide();

		$(".bestSellerToday").css({
			"border-bottom" : "1px solid #b8b8b8",
			"border-left" : "none",
			"border-right" : "1px solid #b8b8b8",
			"border-top" : "none"

		})

		$(".bestSellerWeek").css({
			"border-bottom":"none",
			"border-top":"1px solid #b8b8b8"
		})

		$(".bestSellerRankList > ul:last").stop().show();
	});


// Today, 오늘 클릭 시 실행

$(".bestSellerToday").click(function(){
	i=($(this).index())+1
	$(".bestSellerRankList > ul:last").hide();

	$(".bestSellerToday").css({
		"border-bottom" : "none",
		"border-left" : "none",
		"border-right" : "1px solid #b8b8b8",
		"border-top" : "1px solid #b8b8b8"

	})

	$(".bestSellerWeek").css({
		"border-bottom":"1px solid #b8b8b8",
		"border-top":"none"
	})


	$(".bestSellerRankList > ul:first").stop().show();
});


});


// 인터파크 추천 왼쪽 배너 slide


$(function(){


	function prev() {
		$(".left_banner ul li:last").prependTo('.left_banner ul');
		$(".left_banner ul").css({marginLeft:-0});
		$(".left_banner ul").stop().animate({marginLeft:0},200);
	}

	function next(){
		$(".left_banner ul").stop().animate({marginLeft:-0},200,function(){
			$(".left_banner ul li:first").appendTo('.left_banner ul');
			$(".left_banner ul").css({marginLeft:0},);
		});
	}

		function leftBanner(){
		$('.left_banner ul').stop().animate({marginLeft:-0},200,function(){
			$(".left_banner ul li:first").appendTo('.left_banner ul');
			$(".left_banner ul").css({marginLeft:0});
		});
	}

	setInterval(leftBanner,10000);

	$('.lprev').click(function(){
		prev();
	});

	$('.lnext').click(function(){
		next();
	});

});





// 인터파크 추천 slide


$(function(){


	function prev() {
		$(".recommend_1st_top > li:last").prependTo('.recommend_1st_top');
		$(".recommend_1st_top").css({marginLeft:-900});
		$(".recommend_1st_top").stop().animate({marginLeft:0},200);
	}

	function next(){
		$(".recommend_1st_top").stop().animate({marginLeft:-900},200,function(){
			$(".recommend_1st_top > li:first").appendTo('.recommend_1st_top');
			$(".recommend_1st_top").css({marginLeft:0},);
		});
	}

	function slide1st(){
		$('.recommend_1st_top').stop().animate({marginLeft:-900},200,function(){
			$(".recommend_1st_top > li:first").appendTo('.recommend_1st_top');
			$(".recommend_1st_top").css({marginLeft:0});
		});
	}

	setInterval(slide1st,7000);

	$('.fprev').click(function(){
		prev();
	});

	$('.fnext').click(function(){
		next();
	});

});


// 출판사 choice hover & slide

// 출판사 choice 첫번째 슬라이드 hover

$(function(){

	let i=0;
	$(".recommend_1st_botbox_information1 > .information1_botbox > li").mouseenter(function(){
		i=($(this).index())+1

		$(".recommend_1st_botbox_information1 > .information1_topbox > li:not(:first-child)").css({
			"padding":"30px 50px",
			"display":"flex",
			"flex-direction":"row",
			"justify-content":"space-evenly",
			"width":"100%"
		})
		
		$(".recommend_1st_botbox_information1 > .information1_topbox > li").hide();
		$(".recommend_1st_botbox_information1 > .information1_topbox > li:nth-of-type"+"("+i+")").stop().fadeIn("fast");


	});
});

// 출판사 choice 두번째 슬라이드 hover

$(function(){

	let i=0;
	$(".recommend_1st_botbox_information2 > .information2_botbox > li").mouseenter(function(){
		i=($(this).index())+1

		$(".recommend_1st_botbox_information2 > .information2_topbox > li:not(:first-child)").css({
			"padding":"30px 50px",
			"display":"flex",
			"flex-direction":"row",
			"justify-content":"space-evenly",
			"width":"100%"
		})
		
		$(".recommend_1st_botbox_information2 > .information2_topbox > li").hide();
		$(".recommend_1st_botbox_information2 > .information2_topbox > li:nth-of-type"+"("+i+")").stop().fadeIn("fast");


	});
});



// 출판사 choice button control


$(function(){
	$(".recommend_1st_botbox > .choice_prev").click(function(){
		if($(".recommend_1st_botbox_information2").css("display")=="none"){
			$(".recommend_1st_botbox_information1").hide();
			$(".recommend_1st_botbox_information2").show();
		} else {
			$(".recommend_1st_botbox_information1").show();
			$(".recommend_1st_botbox_information2").hide();
		}
		if($(".h6_click2").css("display")=="none"){
			$(".h6_click1").hide();
			$(".h6_click2").show();
		} else if ($(".h6_click1").css("display")=="none") {
			$(".h6_click1").show();
			$(".h6_click2").hide();
		}

	});

	$(".recommend_1st_botbox > .choice_next").click(function(){
		if($(".recommend_1st_botbox_information2").css("display")=="none"){
			$(".recommend_1st_botbox_information1").hide();
			$(".recommend_1st_botbox_information2").show();
		} else {
			$(".recommend_1st_botbox_information1").show();
			$(".recommend_1st_botbox_information2").hide();
		}

		if($(".h6_click2").css("display")=="none"){
			$(".h6_click1").hide();
			$(".h6_click2").show();
		} else if ($(".h6_click1").css("display")=="none") {
			$(".h6_click1").show();
			$(".h6_click2").hide();
		}

	});



});

// trend&issue fadeIn fadeOut 

$(function(){
	let i=0;

	function trendSlide(){
		i++;
		if (i > $('.trend_issue_box_contents_top > ul li:last').index()){
			i=0;
		}
		$('.trend_issue_box_contents_top > ul li').eq(i).stop().show();
		$('.trend_issue_box_contents_top > ul li').eq(i-1).stop().hide();
	}

	setInterval(trendSlide,5000);
});




// 이 책 어때? button click slide

$(function(){

	let i=1;
	$(".trend_issue_box_control").click(function(){
		i=($(this).index())+1

		$(".trend_issue_box_control").css({
			"background-color":"#ddd"
		})

		$(this).css({
			"background-color":"rgb(63, 208, 255)"
		})

		$(".trend_issue_box_contents_bot article").hide();
		$(".trend_issue_box_contents_bot article:nth-of-type"+"("+i+")").stop().show();

	})
});
