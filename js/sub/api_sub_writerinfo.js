// 저자소개, 저자의 다른책 api 

$.ajax({
	method: "GET",
	url : "https://dapi.kakao.com/v3/search/book?target=title",
	data : {query:"정세랑"},
	headers : {Authorization: "KakaoAK b5c8076bbc619d3a20362b587131a9ad"}
})

.done(function(msg){

	let boxs = document.getElementsByTagName('li');

	for(i in boxs){

		const title1 = msg.documents[i].title;
		const title2 = title1.substring(0,19);



	$('.subBookInfoMadeByAnotherContents ul li').eq(i).append('<a href="sub.html">'+"<img src='"+msg.documents[i].thumbnail+"'>"+ "</a>");
	$('.subBookInfoMadeByAnotherContents ul li').eq(i).append('<a href="sub.html">'+"<h5>"+title2+"</h5>"+'</a>');
	$('.subBookInfoMadeByAnotherContents ul li').eq(i).append("<p><del>"+msg.documents[i].price+"원"+"</del>"+msg.documents[i].sale_price+"원"+"</p>")
	}


});
