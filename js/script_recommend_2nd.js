

// recommend 2nd top javascript 

// 분야별 추천

$(function(){

	let i =0;
	$(".recommend_2nd_top > .recommend_2nd_top_category > .recommend_2nd_top_list > li").mouseenter(function(){
		i = ($(this).index())+1

		$(".recommend_2nd_top > .recommend_2nd_top_category > .recommend_2nd_top_list > li").css({
			"border-bottom":"none",
			"font-size":"14px",
			"font-weight":"bold",

			"color":"#000"
		})

		$(".recommend_2nd_top > .recommend_2nd_top_category > .recommend_2nd_top_list > li:hover").css({
			"border-bottom":"2px solid #e66a57",
			"cursor":"pointer",
			"font-size":"14px",
			"font-weight":"bold",
			
			"color":"#e66a57"
		})

		$(".recommend_2nd_top > .recommend_2nd_topbooks > ul").hide();
		$(".recommend_2nd_top > .recommend_2nd_topbooks > ul:nth-of-type"+"("+i+")").stop().fadeIn("fast");
	})

});


// recommend 2nd bot javascript

// 이 달의 책

$(function(){


	function prev() {
		$(".recommend_2nd_bot_left_slide > li:last").prependTo('.recommend_2nd_bot_left_slide');
		$(".recommend_2nd_bot_left_slide").css({marginLeft:-300});
		$(".recommend_2nd_bot_left_slide").stop().animate({marginLeft:0},120);
	}

	function next(){
		$(".recommend_2nd_bot_left_slide").stop().animate({marginLeft:-300},120,function(){
			$(".recommend_2nd_bot_left_slide > li:first").appendTo('.recommend_2nd_bot_left_slide');
			$(".recommend_2nd_bot_left_slide").css({marginLeft:0},);
		});
	}

	function slide2nd(){
		$('.recommend_2nd_bot_left_slide').stop().animate({marginLeft:-300},120,function(){
			$(".recommend_2nd_bot_left_slide > li:first").appendTo('.recommend_2nd_bot_left_slide');
			$(".recommend_2nd_bot_left_slide").css({marginLeft:0});
		});
	}

	setInterval(slide2nd,5000);

	$('.this_month_prev').click(function(){
		prev();

		// number change

		if($(".h6_click4").css("display")=="none"){
			$(".h6_click1").hide();
			$(".h6_click4").show();
			$(".h6_click3").hide();
			$(".h6_click2").hide();
			
		} else if ($(".h6_click2").css("display")=="none") {
			$(".h6_click4").hide();
			$(".h6_click3").show();
			$(".h6_click2").hide();
			$(".h6_click1").hide();
		}

		else if ($(".h6_click3").css("display")=="none") {
			$(".h6_click3").show();
			$(".h6_click2").hide();
			$(".h6_click1").hide();
			$(".h6_click4").hide();
			
		}

		else if ($(".h6_click1").css("display")=="block") {
			$(".h6_click1").show();
			$(".h6_click2").hide();
			$(".h6_click3").hide();
			$(".h6_click4").hide();
		}


	});

	$('.this_month_next').click(function(){
		next();
	});

});


// 단독혜택 ... 특가할인 ...


$(function(){
	let i=0;
	$(".recommend_2nd_bot_right_top > ul > li").click(function(){
		i=($(this).index())+1
		$(".recommend_2nd_bot_right_bot > ul").hide();

		$(".recommend_2nd_bot_right_top > ul > li").css({
			"border-left" : "none",
			"border-top" : "none",
			"border-right" : "none",
			"border-bottom" : "1px solid #000",
			"padding-top" : "5px",
			"color" : "#000"
		})

		$(".recommend_2nd_bot_right_top > ul > li:nth-of-type"+"("+i+")").css({
			"border-left" : "1px solid #000",
			"border-top" : "1px solid #000",
			"border-right" : "1px solid #000",
			"border-bottom" : "none",
			"padding-top" : "5px",
			"color" : "#E35039"

		})

			



		  $(".recommend_2nd_bot_right_bot ul:nth-of-type"+"("+i+")").stop().show().css({
		  	"display":"flex"
		  })

	})
		

		 

});


