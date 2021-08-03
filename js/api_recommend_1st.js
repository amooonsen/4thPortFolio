	
	// 1st recommend left

	// top slide

	$.ajax({
		method: "GET",
		url : "https://dapi.kakao.com/v3/search/book?target=title",
		data : {query:"장편"},
		headers : {Authorization: "KakaoAK b5c8076bbc619d3a20362b587131a9ad"}
	})

	.done(function(msg){


		$(".recommend_1st_top_img ").eq(0).append('<a href="sub.html">'+"<img src='"+msg.documents[0].thumbnail+"'>"+"</a>");
		$(".recommend_1st_top_next").eq(0).append('<a href="sub.html">'+"<img src='"+msg.documents[1].thumbnail+"'>"+"</a>");

		$(".recommend_1st_top_img ").eq(1).append('<a href="sub.html">'+"<img src='"+msg.documents[1].thumbnail+"'>"+"</a>");
		$(".recommend_1st_top_next").eq(1).append('<a href="sub.html">'+"<img src='"+msg.documents[2].thumbnail+"'>"+"</a>")

		$(".recommend_1st_top_img ").eq(2).append('<a href="sub.html">'+"<img src='"+msg.documents[2].thumbnail+"'>"+"</a>")
		$(".recommend_1st_top_next").eq(2).append('<a href="sub.html">'+"<img src='"+msg.documents[3].thumbnail+"'>"+"</a>")

		$(".recommend_1st_top_img ").eq(3).append('<a href="sub.html">'+"<img src='"+msg.documents[3].thumbnail+"'>"+"</a>")
		$(".recommend_1st_top_next").eq(3).append('<a href="sub.html">'+"<img src='"+msg.documents[0].thumbnail+"'>"+"</a>")


		// top 첫번째 슬라이드

		const title1 = msg.documents[0].title;
		const title2 = title1.substring(0,12);

		const contents1 = msg.documents[0].contents;
		const contents2 = contents1.substring(0,100);

		$(".recommend_1st_top_prev .recommend_1st_top_contents .books_contents").eq(0).prepend(contents2+"...");
		$(".recommend_1st_top_prev .recommend_1st_top_contents .books_title").eq(0).prepend(title2);
		$(".recommend_1st_top_prev .recommend_1st_top_contents .books_publisher").eq(0).prepend(msg.documents[0].publisher);




		// top 두번째 슬라이드

		const title3 = msg.documents[1].title;
		const title4 = title3.substring(0,13);

		const contents3 = msg.documents[1].contents;
		const contents4 = contents3.substring(0,100);

		$(".recommend_1st_top_prev .recommend_1st_top_contents .books_contents").eq(1).prepend(contents4+"...");
		$(".recommend_1st_top_prev .recommend_1st_top_contents .books_title").eq(1).prepend(title4+"...");
		$(".recommend_1st_top_prev .recommend_1st_top_contents .books_publisher").eq(1).prepend(msg.documents[1].publisher);


		// top 세번째 슬라이드

		const title5 = msg.documents[2].title;
		const title6 = title5.substring(0,13);

		const contents5 = msg.documents[2].contents;
		const contents6 = contents5.substring(0,100);

		$(".recommend_1st_top_prev .recommend_1st_top_contents .books_contents").eq(2).prepend(contents6+"...");
		$(".recommend_1st_top_prev .recommend_1st_top_contents .books_title").eq(2).prepend(title6);
		$(".recommend_1st_top_prev .recommend_1st_top_contents .books_publisher").eq(2).prepend(msg.documents[2].publisher);


		// top 네번째 슬라이드

		const title7 = msg.documents[3].title;
		const title8 = title7.substring(0,13);

		const contents7 = msg.documents[3].contents;
		const contents8 = contents7.substring(0,100);

		$(".recommend_1st_top_prev .recommend_1st_top_contents .books_contents").eq(3).prepend(contents8+"...");
		$(".recommend_1st_top_prev .recommend_1st_top_contents .books_title").eq(3).prepend(title8+"...");
		$(".recommend_1st_top_prev .recommend_1st_top_contents .books_publisher").eq(3).prepend(msg.documents[3].publisher);
	});


		// slider_banner 베스트셀러

		$.ajax({
			method: "GET",
			url : "https://dapi.kakao.com/v3/search/book?target=title",
			data : {query:"사람"},
			headers : {Authorization: "KakaoAK b5c8076bbc619d3a20362b587131a9ad"}
		})

		.done(function(msg){


			const boxs = document.getElementsByTagName('li')
			for(i in boxs){

				const title1 = msg.documents[i].title;
				const title2 = title1.substring(0,15);

				$(".bestSellerRankList > ul:first > li a").eq(i).append(title2);
			} 

		});

		$.ajax({
			method: "GET",
			url : "https://dapi.kakao.com/v3/search/book?target=title",
			data : {query:"여행"},
			headers : {Authorization: "KakaoAK b5c8076bbc619d3a20362b587131a9ad"}
		})

		.done(function(msg){


			const boxs = document.getElementsByTagName('li')
			for(i in boxs){

				const title1 = msg.documents[i].title;
				const title2 = title1.substring(0,14);

				$(".bestSellerRankList > ul:last > li a").eq(i).append(title2);
			} 

		});



		// 출판사 choice

		// information1 books tap

		$.ajax({
			method: "GET",
			url : "https://dapi.kakao.com/v3/search/book?target=title",
			data : {query:"일본"},
			headers : {Authorization: "KakaoAK b5c8076bbc619d3a20362b587131a9ad"}
		})

		.done(function(msg){





		// 첫번째 책



		const title1 = msg.documents[0].title;
		const title2 = title1.substring(0,15);
		const contents1 = msg.documents[0].contents;
		const contents2 = contents1.substring(0,25);
		const price1 = msg.documents[0].price/100*2;

		$(".information1_topbox > li > .information1_topbox_imgbox").eq(0).append('<a href="sub.html">'+"<img src='"+msg.documents[0].thumbnail+"'>"+"</a>")
		$(".information1_topbox > li > .information1_topbox_textbox").eq(0).append("<h3>"+msg.documents[0].title+"</h3>");
		$(".information1_topbox > li > .information1_topbox_textbox").eq(0).append("<p>"+contents2+"..."+"</p>");
		$(".information1_topbox > li > .information1_topbox_textbox").eq(0).append("<span>"+msg.documents[0].price+"원"+" + "+"<strong>"+price1+"P"+"</strong>"+"</span>");
		$(".information1_topbox > li > .information1_topbox_textbox").eq(0).append("<h5>"+msg.documents[0].publisher+"출판사 편집부 추천"+"</h5>");



		$(".information1_botbox > li").eq(0).prepend("<img src='"+msg.documents[0].thumbnail+"'>");


		// 두번째 책

		const title3 = msg.documents[1].title;
		const title4 = title3.substring(0,13);
		const contents3 = msg.documents[1].contents;
		const contents4 = contents3.substring(0,25);
		const price2 = msg.documents[1].price/100*2;

		$(".information1_topbox > li > .information1_topbox_imgbox").eq(1).append('<a href="sub.html">'+"<img src='"+msg.documents[1].thumbnail+"'>"+"</a>")
		$(".information1_topbox > li > .information1_topbox_textbox").eq(1).append("<h3>"+title4+"</h3>");
		$(".information1_topbox > li > .information1_topbox_textbox").eq(1).append("<p>"+contents4+"..."+"</p>");
		$(".information1_topbox > li > .information1_topbox_textbox").eq(1).append("<span>"+msg.documents[1].price+"원"+" + "+"<strong>"+price2+"P"+"</strong>"+"</span>");
		$(".information1_topbox > li > .information1_topbox_textbox").eq(1).append("<h5>"+msg.documents[1].publisher+"출판사 편집부 추천"+"</h5>");



		$(".information1_botbox > li").eq(1).prepend("<img src='"+msg.documents[1].thumbnail+"'>");




		// 세번째 책

		const title5 = msg.documents[2].title;
		const title6 = title5.substring(0,13);
		const contents5 = msg.documents[2].contents;
		const contents6 = contents5.substring(0,25);
		const price3 = msg.documents[2].price/100*2;

		const publisher1 = msg.documents[3].publisher;
		const publisher2 = publisher1.substring(0,10);

		$(".information1_topbox > li > .information1_topbox_imgbox").eq(2).append('<a href="sub.html">'+"<img src='"+msg.documents[2].thumbnail+"'>"+"</a>")
		$(".information1_topbox > li > .information1_topbox_textbox").eq(2).append("<h3>"+title6+"</h3>");
		$(".information1_topbox > li > .information1_topbox_textbox").eq(2).append("<p>"+contents6+"..."+"</p>");
		$(".information1_topbox > li > .information1_topbox_textbox").eq(2).append("<span>"+msg.documents[2].price+"원"+" + "+"<strong>"+price3+"P"+"</strong>"+"</span>");
		$(".information1_topbox > li > .information1_topbox_textbox").eq(2).append("<h5>"+publisher2+"출판사 편집부 추천"+"</h5>");



		$(".information1_botbox > li").eq(2).prepend("<img src='"+msg.documents[2].thumbnail+"'>");

		// 네번째 책

		const title7 = msg.documents[3].title;
		const title8 = title7.substring(0,13);
		const contents7 = msg.documents[3].contents;
		const contents8 = contents7.substring(0,25);
		const price4 = msg.documents[3].price/100*2;

		

		$(".information1_topbox > li > .information1_topbox_imgbox").eq(3).append('<a href="sub.html">'+"<img src='"+msg.documents[3].thumbnail+"'>"+"</a>")
		$(".information1_topbox > li > .information1_topbox_textbox").eq(3).append("<h3>"+title8+"..."+"</h3>");
		$(".information1_topbox > li > .information1_topbox_textbox").eq(3).append("<p>"+contents8+"..."+"</p>");
		$(".information1_topbox > li > .information1_topbox_textbox").eq(3).append("<span>"+msg.documents[3].price+"원"+" + "+"<strong>"+price4+"P"+"</strong>"+"</span>");
		$(".information1_topbox > li > .information1_topbox_textbox").eq(3).append("<h5>"+msg.documents[3].publisher+"출판사 편집부 추천"+"</h5>");



		$(".information1_botbox > li").eq(3).prepend("<img src='"+msg.documents[3].thumbnail+"'>");





	});


		// information2 books tap

		$.ajax({
			method: "GET",
			url : "https://dapi.kakao.com/v3/search/book?target=title",
			data : {query:"에세이"},
			headers : {Authorization: "KakaoAK b5c8076bbc619d3a20362b587131a9ad"}
		})

		.done(function(msg){


		// 첫번째 책



		const title1 = msg.documents[0].title;
		const title2 = title1.substring(0,15);
		const contents1 = msg.documents[0].contents;
		const contents2 = contents1.substring(0,25);
		const price1 = msg.documents[0].price/100*2;

		$(".information2_topbox > li > .information2_topbox_imgbox").eq(0).append('<a href="sub.html">'+"<img src='"+msg.documents[0].thumbnail+"'>"+"</a>")
		$(".information2_topbox > li > .information2_topbox_textbox").eq(0).append("<h3>"+msg.documents[0].title+"</h3>");
		$(".information2_topbox > li > .information2_topbox_textbox").eq(0).append("<p>"+contents2+"..."+"</p>");
		$(".information2_topbox > li > .information2_topbox_textbox").eq(0).append("<span>"+msg.documents[0].price+"원"+" + "+"<strong>"+price1+"P"+"</strong>"+"</span>");
		$(".information2_topbox > li > .information2_topbox_textbox").eq(0).append("<h5>"+msg.documents[0].publisher+"출판사 편집부 추천"+"</h5>");



		$(".information2_botbox > li").eq(0).prepend("<img src='"+msg.documents[0].thumbnail+"'>");


		// 두번째 책

		const title3 = msg.documents[1].title;
		const title4 = title3.substring(0,13);
		const contents3 = msg.documents[1].contents;
		const contents4 = contents3.substring(0,25);
		const price2 = msg.documents[1].price/100*2;

		const publisher1 = msg.documents[1].publisher;
		const publisher2 = publisher1.substring(0,5);

		$(".information2_topbox > li > .information2_topbox_imgbox").eq(1).append('<a href="sub.html">'+"<img src='"+msg.documents[1].thumbnail+"'>"+"</a>")
		$(".information2_topbox > li > .information2_topbox_textbox").eq(1).append("<h3>"+title4+"</h3>");
		$(".information2_topbox > li > .information2_topbox_textbox").eq(1).append("<p>"+contents4+"..."+"</p>");
		$(".information2_topbox > li > .information2_topbox_textbox").eq(1).append("<span>"+msg.documents[1].price+"원"+" + "+"<strong>"+price2+"P"+"</strong>"+"</span>");
		$(".information2_topbox > li > .information2_topbox_textbox").eq(1).append("<h5>"+publisher2+"출판사 편집부 추천"+"</h5>");



		$(".information2_botbox > li").eq(1).prepend("<img src='"+msg.documents[1].thumbnail+"'>");




		// 세번째 책

		const title5 = msg.documents[2].title;
		const title6 = title5.substring(0,13);
		const contents5 = msg.documents[2].contents;
		const contents6 = contents5.substring(0,25);
		const price3 = msg.documents[2].price/100*2;

		

		$(".information2_topbox > li > .information2_topbox_imgbox").eq(2).append('<a href="sub.html">'+"<img src='"+msg.documents[2].thumbnail+"'>"+"</a>")
		$(".information2_topbox > li > .information2_topbox_textbox").eq(2).append("<h3>"+title6+"</h3>");
		$(".information2_topbox > li > .information2_topbox_textbox").eq(2).append("<p>"+contents6+"..."+"</p>");
		$(".information2_topbox > li > .information2_topbox_textbox").eq(2).append("<span>"+msg.documents[2].price+"원"+" + "+"<strong>"+price3+"P"+"</strong>"+"</span>");
		$(".information2_topbox > li > .information2_topbox_textbox").eq(2).append("<h5>"+msg.documents[2].publisher+"출판사 편집부 추천"+"</h5>");



		$(".information2_botbox > li").eq(2).prepend("<img src='"+msg.documents[2].thumbnail+"'>");

		// 네번째 책

		const title7 = msg.documents[3].title;
		const title8 = title7.substring(0,13);
		const contents7 = msg.documents[3].contents;
		const contents8 = contents7.substring(0,25);
		const price4 = msg.documents[3].price/100*2;



		

		$(".information2_topbox > li > .information2_topbox_imgbox").eq(3).append('<a href="sub.html">'+"<img src='"+msg.documents[3].thumbnail+"'>"+"</a>")
		$(".information2_topbox > li > .information2_topbox_textbox").eq(3).append("<h3>"+title8+"..."+"</h3>");
		$(".information2_topbox > li > .information2_topbox_textbox").eq(3).append("<p>"+contents8+"..."+"</p>");
		$(".information2_topbox > li > .information2_topbox_textbox").eq(3).append("<span>"+msg.documents[3].price+"원"+" + "+"<strong>"+price4+"P"+"</strong>"+"</span>");
		$(".information2_topbox > li > .information2_topbox_textbox").eq(3).append("<h5>"+msg.documents[3].publisher+"출판사 편집부 추천"+"</h5>");



		$(".information2_botbox > li").eq(3).prepend("<img src='"+msg.documents[3].thumbnail+"'>");





	});

		//1st recommend right 

		// trend&issue

				$.ajax({
			method: "GET",
			url : "https://dapi.kakao.com/v3/search/book?target=title",
			data : {query:"노화"},
			headers : {Authorization: "KakaoAK b5c8076bbc619d3a20362b587131a9ad"}
		})

		.done(function(msg){

			let boxs = document.getElementsByTagName('li')
			for(i=0; i<boxs.length; i++){

				const title1 = msg.documents[i].title;
				const title2 = title1.substring(0,10);
				

				$(".trend_issue_box_contents_top > ul li").eq(i).append('<a href="sub.html">'+"<img src='"+msg.documents[i].thumbnail+"'>"+"</a>")
				$(".trend_issue_box_contents_top > ul li").eq(i).append("<h5>"+title2+"..."+"</h5>");
				$(".trend_issue_box_contents_top > ul li").eq(i).append("<h6>"+msg.documents[i].authors+" 저"+"</h6>");
				$(".trend_issue_box_contents_top > ul li").eq(i).append("<p>"+"<del>"+msg.documents[i].price+"원 "+"</del>"+msg.documents[i].sale_price+
					"원"+"</p>");

			}


		});


		// 이 책 어때?

		$.ajax({
			method: "GET",
			url : "https://dapi.kakao.com/v3/search/book?target=title",
			data : {query:"IT"},
			headers : {Authorization: "KakaoAK b5c8076bbc619d3a20362b587131a9ad"}
		})

		.done(function(msg){

			let boxs = document.getElementsByTagName('article')
			for(i=0; i<boxs.length; i++){

				const title1 = msg.documents[i].title;
				const title2 = title1.substring(0,20);
				

				$(".trend_issue_box_contents_bot > article").eq(i).append('<a href="sub.html">'+"<img src='"+msg.documents[i].thumbnail+"'>"+"</a>")
				$(".trend_issue_box_contents_bot > article").eq(i).append("<h6>"+title2+"..."+"</h6>");
				$(".trend_issue_box_contents_bot > article").eq(i).append("<p>"+msg.documents[i].authors+" 저"+"</p>");

			}


		});




