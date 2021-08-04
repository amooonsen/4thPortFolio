
// 중고도서

$.ajax({
	method : "GET",
	url : "https://dapi.kakao.com/v3/search/book?target=title",
	data : {query:"도망"},
	headers : {Authorization: "KakaoAK b5c8076bbc619d3a20362b587131a9ad"}

})

.done(function(msg){


	const boxs = document.getElementsByClassName('resell_book_list');

	for(i in boxs){

		const title1 = msg.documents[i].title;
		const title2 = title1.substring(0,15);

		$('.resell_book_list').eq(i).append('<a href="sub.html">'+"<img src='"+msg.documents[i].thumbnail+"'>"+"</a>")
		$('.resell_book_list').eq(i).append("<h4>"+title2+"</h4>");
		$('.resell_book_list').eq(i).append("<h5>"+"<del>"+msg.documents[i].price+"</del>"+"</h5>")
		$('.resell_book_list').eq(i).append("<h6>"+"<span>"+msg.documents[i].price*0.3+"원"+"</span>"+"  "+"70%↓"+"</h6>");

	}

});


// cd 관련

$.ajax({
	method : "GET",
	url : "https://dapi.kakao.com/v3/search/book?target=title",
	data : {query:"음악"},
	headers : {Authorization: "KakaoAK b5c8076bbc619d3a20362b587131a9ad"}

})

.done(function(msg){
	
	const boxs = document.getElementsByTagName('li');



	for(i in boxs){

		const title1 = msg.documents[i].title;
		const title2 = title1.substring(0,20);

		const price2 = parseInt(msg.documents[i].price*0.9);

		const price3 = parseInt(price2*0.05);

		$('.resell_cd_maincontents > ul > li').eq(i).append('<a href="sub.html">'+"<img src='"+msg.documents[i].thumbnail+"'>"+"</a>")
		$('.resell_cd_maincontents > ul > li').eq(i).append("<h5>"+title2+"..."+"</h5>");
		$('.resell_cd_maincontents > ul > li').eq(i).append("<p>"+"<del>"+msg.documents[i].price+"원"+"</del>"+" "+"<strong>"+price2+"원 "+"</strong>"+" + "+price3+"P"+"</p>");
	}

});


// dvd 관련


$.ajax({
	method : "GET",
	url : "https://dapi.kakao.com/v3/search/book?target=title",
	data : {query:"movie"},
	headers : {Authorization: "KakaoAK b5c8076bbc619d3a20362b587131a9ad"}

})

.done(function(msg){
	
	const boxs = document.getElementsByTagName('li');



	for(i in boxs){

		const title1 = msg.documents[i].title;
		const title2 = title1.substring(0,15);

		const price2 = parseInt(msg.documents[i].price*0.9);

		const price3 = parseInt(price2*0.05);

		$('.resell_dvd_maincontents > ul > li').eq(i).append('<a href="sub.html">'+"<img src='"+msg.documents[i].thumbnail+"'>"+"</a>")
		$('.resell_dvd_maincontents > ul > li').eq(i).append("<h5>"+title2+"..."+"</h5>");
		$('.resell_dvd_maincontents > ul > li').eq(i).append("<p>"+"<del>"+msg.documents[i].price+"원"+"</del>"+" "+"<strong>"+price2+"원 "+"</strong>"+" + "+price3+"P"+"</p>");
	}

});

// eBook



$.ajax({
	method : "GET",
	url : "https://dapi.kakao.com/v3/search/book?target=title",
	data : {query:"세계문학전집"},
	headers : {Authorization: "KakaoAK b5c8076bbc619d3a20362b587131a9ad"}

})

.done(function(msg){
	
	const boxs = document.getElementsByTagName('li');



	for(i in boxs){

		const title1 = msg.documents[i].title;
		const title2 = title1.substring(0,25);

		const contents1 = msg.documents[i].contents;
		const contents2 = contents1.substring(0,160);

		const price2 = parseInt(msg.documents[i].price*0.9);

		const price3 = parseInt(price2*0.05);

		$('.resell_ebook_contents > ul > li').eq(i).append("<img src='"+msg.documents[i].thumbnail+"'>");
		$('.resell_ebook_subcontents > ul > li').eq(i).append("<h5>"+title2+"..."+"</h5>");
		$('.resell_ebook_subcontents > ul > li').eq(i).append("<p>"+"<del>"+msg.documents[i].price+"원"+"</del>"+" "+"<strong>"+price2+"원 "+"</strong>"+" + "+price3+"P"+"</p>");

		$('.resell_ebook_subcontents > ul > li').eq(i).append("<h6>"+contents2+"..."+"</h6>");
	}

});


// 인터파크 이번 달 많이 팔린 책

