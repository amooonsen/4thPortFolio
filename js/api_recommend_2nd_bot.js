// 이 달의 책

// top

$.ajax({
	method : "GET",
	url : "https://dapi.kakao.com/v3/search/book?target=title",
	data : {query:"니체"},
	headers : {Authorization: "KakaoAK b5c8076bbc619d3a20362b587131a9ad"}
})

.done(function(msg){
	

	const boxs = document.getElementsByClassName('slide_top');

	for(i=0; i<boxs.length; i++){

		const title1 = msg.documents[i].title
		const title2 = title1.substring(0,28);

		const contents1 = msg.documents[i].contents
		const contents2 = contents1.substring(0,50);

		const price1 = parseInt(msg.documents[i].price/1.1);

		$(".slide_top > .slide_top_imgbox").eq(i).append('<a href="sub.html">'+"<img src='"+msg.documents[i].thumbnail+"'>"+"</a>")
		$(".slide_top > .slide_top_textbox").eq(i).append("<h3>"+title2+"</h3>");
		$(".slide_top > .slide_top_textbox").eq(i).append("<h4>"+"<del>"+msg.documents[i].price+"원"+"</del>"+" "+price1+"원");
		$(".slide_top > .slide_top_textbox").eq(i).append("<p>"+contents2+"..."+"</p>");
		$(".slide_top > .slide_top_textbox").eq(i).append("<span>"+msg.documents[i].status+"</span>");
	}




});

// bottom


$.ajax({
	method : "GET",
	url : "https://dapi.kakao.com/v3/search/book?target=title",
	data : {query:"에쿠니"},
	headers : {Authorization: "KakaoAK b5c8076bbc619d3a20362b587131a9ad"}
})

.done(function(msg){
	

	const boxs = document.getElementsByClassName('slide_bot');

	for(i=0; i<boxs.length; i++){

		const title1 = msg.documents[i].title
		const title2 = title1.substring(0,25);

		const contents1 = msg.documents[i].contents
		const contents2 = contents1.substring(0,50);


		const price1 = parseInt(msg.documents[i].price/1.1);

		$(".slide_bot > .slide_bot_imgbox").eq(i).append('<a href="sub.html">'+"<img src='"+msg.documents[i].thumbnail+"'>"+"</a>")
		$(".slide_bot > .slide_bot_textbox").eq(i).append("<h3>"+title2+"</h3>");
		$(".slide_bot > .slide_bot_textbox").eq(i).append("<h4>"+"<del>"+msg.documents[i].price+"원"+"</del>"+" "+price1+"원");
		$(".slide_bot > .slide_bot_textbox").eq(i).append("<p>"+contents2+"..."+"</p>");
		$(".slide_bot > .slide_bot_textbox").eq(i).append("<span>"+msg.documents[i].status+"</span>");

	}

});

// 단독헤택 


$.ajax({
	method : "GET",
	url : "https://dapi.kakao.com/v3/search/book?target=title",
	data : {query:"자기소개서"},
	headers : {Authorization: "KakaoAK b5c8076bbc619d3a20362b587131a9ad"}
})

.done(function(msg){
	console.log(msg.documents[0].title);

	const boxs = document.getElementsByClassName('recommend_2nd_bot_img_slide')

	for(i=0; i<boxs.length; i++){

		const title1 = msg.documents[i].title
		const title2 = title1.substring(0,10);

	

		$(".recommend_2nd_bot_img_slide > .recommend_2nd_bot_img_slide_list").eq(i).append('<a href="sub.html">'+"<img src='"+msg.documents[i].thumbnail+"'>"+"</a>");
		$(".recommend_2nd_bot_img_slide > .recommend_2nd_bot_img_slide_list").eq(i).append("<h4>"+title2+"</h4>");
		$(".recommend_2nd_bot_img_slide > .recommend_2nd_bot_img_slide_list").eq(i).append("<h5>"+"<del>"+msg.documents[i].price+"원"+"</del>"+"</h5>");
		$(".recommend_2nd_bot_img_slide > .recommend_2nd_bot_img_slide_list").eq(i).append("<h5>"+msg.documents[i].sale_price+"원"+"</h5>");

	}

});

// 특가할인

$.ajax({
	method : "GET",
	url : "https://dapi.kakao.com/v3/search/book?target=title",
	data : {query:"가이"},
	headers : {Authorization: "KakaoAK b5c8076bbc619d3a20362b587131a9ad"}
})

.done(function(msg){
	console.log(msg.documents[0].title);

	const boxs = document.getElementsByClassName('recommend_2nd_bot_img_slide')

	for(i=0; i<boxs.length; i++){

		const title1 = msg.documents[i].title
		const title2 = title1.substring(0,15);

	

		$(".recommend_2nd_bot_img_slide:eq(1) > .recommend_2nd_bot_img_slide_list").eq(i).append('<a href="sub.html">'+"<img src='"+msg.documents[i].thumbnail+"'>"+"</a>");
		$(".recommend_2nd_bot_img_slide:eq(1) > .recommend_2nd_bot_img_slide_list").eq(i).append("<h4>"+title2+"</h4>");
		$(".recommend_2nd_bot_img_slide:eq(1) > .recommend_2nd_bot_img_slide_list").eq(i).append("<h5>"+"<del>"+msg.documents[i].price+"원"+"</del>"+"</h5>");
		$(".recommend_2nd_bot_img_slide:eq(1) > .recommend_2nd_bot_img_slide_list").eq(i).append("<h5>"+msg.documents[i].sale_price+"원"+"</h5>");

	}

});

//매니아층

$.ajax({
	method : "GET",
	url : "https://dapi.kakao.com/v3/search/book?target=title",
	data : {query:"판타지"},
	headers : {Authorization: "KakaoAK b5c8076bbc619d3a20362b587131a9ad"}
})

.done(function(msg){
	console.log(msg.documents[0].title);

	const boxs = document.getElementsByClassName('recommend_2nd_bot_img_slide_list')

	for(i=0; i<boxs.length; i++){

		const title1 = msg.documents[i].title
		const title2 = title1.substring(0,10);

	

		$(".recommend_2nd_bot_img_slide:eq(2) > .recommend_2nd_bot_img_slide_list").eq(i).append('<a href="sub.html">'+"<img src='"+msg.documents[i].thumbnail+"'>"+"</a>");
		$(".recommend_2nd_bot_img_slide:eq(2) > .recommend_2nd_bot_img_slide_list").eq(i).append("<h4>"+title2+"</h4>");
		$(".recommend_2nd_bot_img_slide:eq(2) > .recommend_2nd_bot_img_slide_list").eq(i).append("<h5>"+"<del>"+msg.documents[i].price+"원"+"</del>"+"</h5>");
		$(".recommend_2nd_bot_img_slide:eq(2) > .recommend_2nd_bot_img_slide_list").eq(i).append("<h5>"+msg.documents[i].sale_price+"원"+"</h5>");

	}

});

//어린이전집

$.ajax({
	method : "GET",
	url : "https://dapi.kakao.com/v3/search/book?target=title",
	data : {query:"어린이전집"},
	headers : {Authorization: "KakaoAK b5c8076bbc619d3a20362b587131a9ad"}
})

.done(function(msg){
	console.log(msg.documents[0].title);

	const boxs = document.getElementsByClassName('recommend_2nd_bot_img_slide_list')

	for(i=0; i<boxs.length; i++){

		const title1 = msg.documents[i].title
		const title2 = title1.substring(0,10);

	

		$(".recommend_2nd_bot_img_slide:eq(3) > .recommend_2nd_bot_img_slide_list").eq(i).append('<a href="sub.html">'+"<img src='"+msg.documents[i].thumbnail+"'>"+"</a>");
		$(".recommend_2nd_bot_img_slide:eq(3) > .recommend_2nd_bot_img_slide_list").eq(i).append("<h4>"+title2+"</h4>");
		$(".recommend_2nd_bot_img_slide:eq(3) > .recommend_2nd_bot_img_slide_list").eq(i).append("<h5>"+"<del>"+msg.documents[i].price+"원"+"</del>"+"</h5>");
		$(".recommend_2nd_bot_img_slide:eq(3) > .recommend_2nd_bot_img_slide_list").eq(i).append("<h5>"+msg.documents[i].sale_price+"원"+"</h5>");

	}

});



