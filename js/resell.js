// pop 관련 버튼

$(function(){
	$(".resell_cd_maincontents > .cd_prev").click(function(){
		$('.resell_cd_maincontents ul li:first').appendTo('.resell_cd_maincontents ul');
		$('.resell_cd_maincontents ul li:first').insertAfter('.resell_cd_maincontents ul li:last');
		});

	$('.resell_cd_maincontents > .cd_next').click(function(){
		$('.resell_cd_maincontents ul li:first').prependTo('.resell_cd_maincontents ul');
		$('.resell_cd_maincontents ul li:first').insertAfter('.resell_cd_maincontents ul li:last');
	})
		
	});

// 영화 관련 버튼

$(function(){
	$(".resell_dvd_maincontents > .cd_prev").click(function(){
		$('.resell_dvd_maincontents ul li:first').appendTo('.resell_dvd_maincontents ul');
		$('.resell_dvd_maincontents ul li:first').insertAfter('.resell_dvd_maincontents ul li:last');
		});

	$('.resell_dvd_maincontents > .cd_next').click(function(){
		$('.resell_dvd_maincontents ul li:first').prependTo('.resell_dvd_maincontents ul');
		$('.resell_dvd_maincontents ul li:first').insertAfter('.resell_dvd_maincontents ul li:last');
	})
		
	});

// 세계명작 관련 버튼


$(function(){
	$('.resell_ebook_contents > .cd_prev').click(function(){
		$('.resell_ebook_contents ul li:first').appendTo('.resell_ebook_contents ul');
		$('.resell_ebook_contents ul li:first').insertAfter('.resell_ebook_contents ul li:last');

		$('.resell_ebook_subcontents ul li:first').appendTo('.resell_ebook_subcontents ul');
		$('.resell_ebook_subcontents ul li:first').insertAfter('.resell_ebook_subcontents ul li:last');


	});

	$('.resell_ebook_contents > .cd_next').click(function(){
		$('.resell_ebook_contents ul li:first').prependTo('.resell_ebook_contents ul');
		$('.resell_ebook_contents ul li:first').insertAfter('.resell_ebook_contents ul li:last');

		$('.resell_ebook_subcontents ul li:first').prependTo('.resell_ebook_subcontents ul');
		$('.resell_ebook_subcontents ul li:first').insertAfter('.resell_ebook_subcontents ul li:last');


	});
		
	});


