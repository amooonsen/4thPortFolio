// 우측 로그인 메뉴 노출, 숨김

$(function(){
	$('.fixed_login_open_close').click(function(){
		if($('#fixed_login').css("right")=="-115px"){
			$('#fixed_login').stop().animate({
				right : '0',
			})
			$('.close_button').show();
			$('.open_button').hide();
		} else {
			$('#fixed_login').stop().animate({
				right : '-115',
			})
			$('.open_button').show();
			$('.close_button').hide();
		}
	});
});


// 버튼 클릭 시 문서 최상단으로 이동 topScroll back2top

$(function(){
	let goToTop = $('.top_button');
	let delay = 300;
	goToTop.on('click', function() {
		$('html, body').stop().animate({
			scrollTop: 0
		}, delay);
	});

})

$(function(){
	$(window).scroll(function() {
		if ($(window).scrollTop() > 500) {
			$('.top_button').fadeIn();
		}else{
			$('.top_button').fadeOut("fast");
		}
	});
}); 

// header 마이페이지 드롭다운

   $(function(){
        $(".mypage").mouseenter(function(){
          $(".mypage > ul").show()
          $(".mypage i:last").show()
          $(".mypage i:first").hide()
        }).mouseleave(function(){
          $(".mypage > ul").hide()
          $(".mypage i:last").hide()
          $(".mypage i:first").show()
        });
  });


// header 이벤트 드롭다운

   $(function(){
        $(".header_event_last").mouseenter(function(){
          $(".header_event_last ul").show()
        }).mouseleave(function(){
          $(".header_event_last ul").hide()
        });
  });



// 전체 카테고리 - all category 누르면 내려오는 nav


$(function(){
	$('.all_category').click(function(){
		if($('#up1').css("display")=="none"){
			$('#up1').show();
			$('#down1').hide();
			$('.nav_slide').slideDown(200);
		} else {
			$('#up1').hide();
			$('#down1').show();
			$('.nav_slide').slideUp(200);
		}
	});
	$('.xBtn').click(function(){
		$('.nav_slide').slideUp(200);
		$('#up1').hide();
		$('#down1').show();
		
	});
});



// footer 그룹사소개 script


   $(function(){
        $(".footer_info_top_select").mouseenter(function(){
          $(".footer_info_top_select > ul").show()
        }).mouseleave(function(){
          $(".footer_info_top_select > ul").hide()
        })
  })
