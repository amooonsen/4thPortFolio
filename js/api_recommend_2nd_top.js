
// 문학인문

$.ajax({
	method: "GET",
	url : "https://dapi.kakao.com/v3/search/book?target=title",
	data : {query:"문학인문"},
	headers : {Authorization: "KakaoAK b5c8076bbc619d3a20362b587131a9ad"}
})

.done(function(msg){


	const title1 = msg.documents[0].title;
	const title2 = title1.substring(0,10);
	const price1 = msg.documents[0].price/100*2;

	$(".recommend_2nd_topbooks > .literature > li").eq(0).append('<a href="sub.html">'+"<img src='"+msg.documents[0].thumbnail+"'>"+"</a>");
	$(".recommend_2nd_topbooks > .literature > li").eq(0).append("<h3>"+title2+"..."+"</h3>");
	$(".recommend_2nd_topbooks > .literature > li").eq(0).append("<p>"+msg.documents[0].price+"원"+" + "+"<span>"+price1+"P"+"</span>"+"</p>");

	const title3 = msg.documents[1].title;
	const title4 = title3.substring(0,10);
	const price2 = msg.documents[1].price/100*2;

	$(".recommend_2nd_topbooks > .literature > li").eq(1).append('<a href="sub.html">'+"<img src='"+msg.documents[1].thumbnail+"'>"+"</a>");
	$(".recommend_2nd_topbooks > .literature > li").eq(1).append("<h3>"+title4+"..."+"</h3>");
	$(".recommend_2nd_topbooks > .literature > li").eq(1).append("<p>"+msg.documents[1].price+"원"+" + "+"<span>"+price2+"P"+"</span>"+"</p>");

	const title5 = msg.documents[2].title;
	const title6 = title5.substring(0,10);
	const price3 = msg.documents[2].price/100*2;

	$(".recommend_2nd_topbooks > .literature > li").eq(2).append('<a href="sub.html">'+"<img src='"+msg.documents[2].thumbnail+"'>"+"</a>");
	$(".recommend_2nd_topbooks > .literature > li").eq(2).append("<h3>"+title6+"..."+"</h3>");
	$(".recommend_2nd_topbooks > .literature > li").eq(2).append("<p>"+msg.documents[2].price+"원"+" + "+"<span>"+price3+"P"+"</span>"+"</p>");

	const title7 = msg.documents[3].title;
	const title8 = title7.substring(0,10);
	const price4 = msg.documents[3].price/100*2;

	$(".recommend_2nd_topbooks > .literature > li").eq(3).append('<a href="sub.html">'+"<img src='"+msg.documents[3].thumbnail+"'>"+"</a>");
	$(".recommend_2nd_topbooks > .literature > li").eq(3).append("<h3>"+title8+"..."+"</h3>");
	$(".recommend_2nd_topbooks > .literature > li").eq(3).append("<p>"+msg.documents[3].price+"원"+" + "+"<span>"+price4+"P"+"</span>"+"</p>");


	const title9 = msg.documents[4].title;
	const title10 = title9.substring(0,10);
	const price5 = msg.documents[4].price/100*2;

	$(".recommend_2nd_topbooks > .literature > li").eq(4).append('<a href="sub.html">'+"<img src='"+msg.documents[4].thumbnail+"'>"+"</a>");
	$(".recommend_2nd_topbooks > .literature > li").eq(4).append("<h3>"+title10+"..."+"</h3>");
	$(".recommend_2nd_topbooks > .literature > li").eq(4).append("<p>"+msg.documents[4].price+"원"+" + "+"<span>"+price5+"P"+"</span>"+"</p>");


	const title11 = msg.documents[5].title;
	const title12 = title11.substring(0,10);
	const price6 = msg.documents[5].price/100*2;

	$(".recommend_2nd_topbooks > .literature > li").eq(5).append('<a href="sub.html">'+"<img src='"+msg.documents[5].thumbnail+"'>"+"</a>");
	$(".recommend_2nd_topbooks > .literature > li").eq(5).append("<h3>"+title12+"..."+"</h3>");
	$(".recommend_2nd_topbooks > .literature > li").eq(5).append("<p>"+msg.documents[5].price+"원"+" + "+"<span>"+price6+"P"+"</span>"+"</p>");





});


// 유아&아동

$.ajax({
	method: "GET",
	url : "https://dapi.kakao.com/v3/search/book?target=title",
	data : {query:"유아/아동"},
	headers : {Authorization: "KakaoAK b5c8076bbc619d3a20362b587131a9ad"}
})

.done(function(msg){
	

	const title1 = msg.documents[0].title;
	const title2 = title1.substring(0,10);
	const price1 = msg.documents[0].price/100*2;

	$(".recommend_2nd_topbooks > .kids > li").eq(0).append('<a href="sub.html">'+"<img src='"+msg.documents[0].thumbnail+"'>"+"</a>");
	$(".recommend_2nd_topbooks > .kids > li").eq(0).append("<h3>"+title2+"..."+"</h3>");
	$(".recommend_2nd_topbooks > .kids > li").eq(0).append("<p>"+msg.documents[0].price+"원"+" + "+"<span>"+price1+"P"+"</span>"+"</p>");

	const title3 = msg.documents[1].title;
	const title4 = title3.substring(0,10);
	const price2 = msg.documents[1].price/100*2;

	$(".recommend_2nd_topbooks > .kids > li").eq(1).append('<a href="sub.html">'+"<img src='"+msg.documents[1].thumbnail+"'>"+"</a>");
	$(".recommend_2nd_topbooks > .kids > li").eq(1).append("<h3>"+title4+"..."+"</h3>");
	$(".recommend_2nd_topbooks > .kids > li").eq(1).append("<p>"+msg.documents[1].price+"원"+" + "+"<span>"+price2+"P"+"</span>"+"</p>");

	const title5 = msg.documents[2].title;
	const title6 = title5.substring(0,10);
	const price3 = msg.documents[2].price/100*2;

	$(".recommend_2nd_topbooks > .kids > li").eq(2).append('<a href="sub.html">'+"<img src='"+msg.documents[2].thumbnail+"'>"+"</a>");
	$(".recommend_2nd_topbooks > .kids > li").eq(2).append("<h3>"+title6+"..."+"</h3>");
	$(".recommend_2nd_topbooks > .kids > li").eq(2).append("<p>"+msg.documents[2].price+"원"+" + "+"<span>"+price3+"P"+"</span>"+"</p>");

	const title7 = msg.documents[3].title;
	const title8 = title7.substring(0,10);
	const price4 = msg.documents[3].price/100*2;

	$(".recommend_2nd_topbooks > .kids > li").eq(3).append('<a href="sub.html">'+"<img src='"+msg.documents[3].thumbnail+"'>"+"</a>");
	$(".recommend_2nd_topbooks > .kids > li").eq(3).append("<h3>"+title8+"..."+"</h3>");
	$(".recommend_2nd_topbooks > .kids > li").eq(3).append("<p>"+msg.documents[3].price+"원"+" + "+"<span>"+price4+"P"+"</span>"+"</p>");


	const title9 = msg.documents[4].title;
	const title10 = title9.substring(0,10);
	const price5 = msg.documents[4].price/100*2;

	$(".recommend_2nd_topbooks > .kids > li").eq(4).append('<a href="sub.html">'+"<img src='"+msg.documents[4].thumbnail+"'>"+"</a>");
	$(".recommend_2nd_topbooks > .kids > li").eq(4).append("<h3>"+title10+"..."+"</h3>");
	$(".recommend_2nd_topbooks > .kids > li").eq(4).append("<p>"+msg.documents[4].price+"원"+" + "+"<span>"+price5+"P"+"</span>"+"</p>");


	const title11 = msg.documents[5].title;
	const title12 = title11.substring(0,10);
	const price6 = msg.documents[5].price/100*2;

	$(".recommend_2nd_topbooks > .kids > li").eq(5).append('<a href="sub.html">'+"<img src='"+msg.documents[5].thumbnail+"'>"+"</a>");
	$(".recommend_2nd_topbooks > .kids > li").eq(5).append("<h3>"+title12+"..."+"</h3>");
	$(".recommend_2nd_topbooks > .kids > li").eq(5).append("<p>"+msg.documents[5].price+"원"+" + "+"<span>"+price6+"P"+"</span>"+"</p>");





});

// 경제&실용

$.ajax({
	method: "GET",
	url : "https://dapi.kakao.com/v3/search/book?target=title",
	data : {query:"경제"},
	headers : {Authorization: "KakaoAK b5c8076bbc619d3a20362b587131a9ad"}
})

.done(function(msg){

	let boxs = document.getElementsByClassName('economy_list')
	for(i=0; i<boxs.length; i++){

	const title1 = msg.documents[i].title;
	const title2 = title1.substring(0,10);
	const price1 = msg.documents[i].price/100*2;

	$(".recommend_2nd_topbooks > .economy > .economy_list").eq(i).append('<a href="sub.html">'+"<img src='"+msg.documents[i].thumbnail+"'>"+"</a>");
	$(".recommend_2nd_topbooks > .economy > .economy_list").eq(i).append("<h3>"+title2+"..."+"</h3>");
	$(".recommend_2nd_topbooks > .economy > .economy_list").eq(i).append("<p>"+msg.documents[i].price+"원"+" + "+"<span>"+price1+"P"+"</span>"+"</p>");

}


});


// 학습&어학

$.ajax({
	method: "GET",
	url : "https://dapi.kakao.com/v3/search/book?target=title",
	data : {query:"학습"},
	headers : {Authorization: "KakaoAK b5c8076bbc619d3a20362b587131a9ad"}
})

.done(function(msg){

	let boxs = document.getElementsByClassName('study_list')
	for(i=0; i<boxs.length; i++){

	const title1 = msg.documents[i].title;
	const title2 = title1.substring(0,10);
	const price1 = msg.documents[i].price/100*2;

	$(".recommend_2nd_topbooks > .study > .study_list").eq(i).append('<a href="sub.html">'+"<img src='"+msg.documents[i].thumbnail+"'>"+"</a>");
	$(".recommend_2nd_topbooks > .study > .study_list").eq(i).append("<h3>"+title2+"..."+"</h3>");
	$(".recommend_2nd_topbooks > .study > .study_list").eq(i).append("<p>"+msg.documents[i].price+"원"+" + "+"<span>"+price1+"P"+"</span>"+"</p>");

}


});


// 외국도서

$.ajax({
	method: "GET",
	url : "https://dapi.kakao.com/v3/search/book?target=title",
	data : {query:"외국"},
	headers : {Authorization: "KakaoAK b5c8076bbc619d3a20362b587131a9ad"}
})

.done(function(msg){

	let boxs = document.getElementsByClassName('foregin_list')
	for(i=0; i<boxs.length; i++){

	const title1 = msg.documents[i].title;
	const title2 = title1.substring(0,10);
	const price1 = msg.documents[i].price/100*2;

	$(".recommend_2nd_topbooks > .foregin > .foregin_list").eq(i).append('<a href="sub.html">'+"<img src='"+msg.documents[i].thumbnail+"'>"+"</a>");
	$(".recommend_2nd_topbooks > .foregin > .foregin_list").eq(i).append("<h3>"+title2+"..."+"</h3>");
	$(".recommend_2nd_topbooks > .foregin > .foregin_list").eq(i).append("<p>"+msg.documents[i].price+"원"+" + "+"<span>"+price1+"P"+"</span>"+"</p>");

}


});


// ebook


$.ajax({
	method: "GET",
	url : "https://dapi.kakao.com/v3/search/book?target=title",
	data : {query:"ebook"},
	headers : {Authorization: "KakaoAK b5c8076bbc619d3a20362b587131a9ad"}
})

.done(function(msg){

	let boxs = document.getElementsByClassName('ebook_list')
	for(i=0; i<boxs.length; i++){

	const title1 = msg.documents[i].title;
	const title2 = title1.substring(0,10);
	const price1 = msg.documents[i].price/100*2;

	$(".recommend_2nd_topbooks > .ebook > .ebook_list").eq(i).append('<a href="sub.html">'+"<img src='"+msg.documents[i].thumbnail+"'>"+"</a>");
	$(".recommend_2nd_topbooks > .ebook > .ebook_list").eq(i).append("<h3>"+title2+"..."+"</h3>");
	$(".recommend_2nd_topbooks > .ebook> .ebook_list").eq(i).append("<p>"+msg.documents[i].price+"원"+" + "+"<span>"+price1+"P"+"</span>"+"</p>");

}


});


// CD&DVD


$.ajax({
	method: "GET",
	url : "https://dapi.kakao.com/v3/search/book?target=title",
	data : {query:"DVD"},
	headers : {Authorization: "KakaoAK b5c8076bbc619d3a20362b587131a9ad"}
})

.done(function(msg){

	let boxs = document.getElementsByClassName('cd_dvd_list')
	for(i=0; i<boxs.length; i++){

	const title1 = msg.documents[i].title;
	const title2 = title1.substring(0,10);
	const price1 = msg.documents[i].price/100*2;

	$(".recommend_2nd_topbooks > .cd_dvd > .cd_dvd_list").eq(i).append('<a href="sub.html">'+"<img src='"+msg.documents[i].thumbnail+"'>"+"</a>");
	$(".recommend_2nd_topbooks > .cd_dvd > .cd_dvd_list").eq(i).append("<h3>"+title2+"..."+"</h3>");
	$(".recommend_2nd_topbooks > .cd_dvd > .cd_dvd_list").eq(i).append("<p>"+msg.documents[i].price+"원"+" + "+"<span>"+price1+"P"+"</span>"+"</p>");

}


});

// 카테고리 이동 

		 $(function(){

       let i =0;
       $(".recommend_2nd_top > .recommend_2nd_top_category > .recommend_2nd_top_list > li").mouseenter(function(){
         i = ($(this).index())+1
         $(".recommend_2nd_top > .recommend_2nd_topbooks > ul").hide();
         $(".recommend_2nd_top > .recommend_2nd_topbooks > ul:nth-of-type"+"("+i+")").stop().fadeIn("fast");
            })

   });