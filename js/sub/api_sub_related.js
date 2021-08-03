$.ajax({
	method: "GET",
	url : "https://dapi.kakao.com/v3/search/book?target=title",
	data : {query:"에세이"},
	headers : {Authorization: "KakaoAK b5c8076bbc619d3a20362b587131a9ad"}
})

.done(function(msg){

	let boxs = document.getElementsByTagName('li');

	for(i in boxs){

		const title1 = msg.documents[i].title;
		const title2 = title1.substring(0,23);



	$('.subBookRelatedMost:first .subBookRelatedMostList li').eq(i).append('<a href="sub.html">'+"<img src='"+msg.documents[i].thumbnail+"'>"+ "</a>");
	$('.subBookRelatedMost:first .subBookRelatedMostList li').eq(i).append('<a href="sub.html">'+"<h5>"+title2+"</h5>"+'</a>');
	}


});

$.ajax({
	method: "GET",
	url : "https://dapi.kakao.com/v3/search/book?target=title",
	data : {query:"슬픔"},
	headers : {Authorization: "KakaoAK b5c8076bbc619d3a20362b587131a9ad"}
})

.done(function(msg){

	let boxs = document.getElementsByTagName('li');

	for(i in boxs){

		const title1 = msg.documents[i].title;
		const title2 = title1.substring(0,23);



	$('.subBookRelatedMost:nth-child(2) .subBookRelatedMostList li').eq(i).append('<a href="sub.html">'+"<img src='"+msg.documents[i].thumbnail+"'>"+ "</a>");
	$('.subBookRelatedMost:nth-child(2) .subBookRelatedMostList li').eq(i).append('<a href="sub.html">'+"<h5>"+title2+"</h5>"+'</a>');

	}


});

$.ajax({
	method: "GET",
	url : "https://dapi.kakao.com/v3/search/book?target=title",
	data : {query:"하루키"},
	headers : {Authorization: "KakaoAK b5c8076bbc619d3a20362b587131a9ad"}
})

.done(function(msg){

	let boxs = document.getElementsByTagName('li');

	for(i in boxs){

		const title1 = msg.documents[i].title;
		const title2 = title1.substring(0,23);



	$('.subBookRelatedMost:last .subBookRelatedMostList li').eq(i).append('<a href="sub.html">'+"<img src='"+msg.documents[i].thumbnail+"'>"+ "</a>");
	$('.subBookRelatedMost:last .subBookRelatedMostList li').eq(i).append('<a href="sub.html">'+"<h5>"+title2+"</h5>"+'</a>');
	}


});