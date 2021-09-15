# 2021 4th portfolio
### 인터파크 도서 - Interpark
[view portfolio](https://amooonsen.github.io/4thPortFolio/index.html)


# Preview
국내 웹 도서 사이트 '인터파크 도서'입니다.

페이지 내의 도서 내용들은 KaKao에서 제공하는 Open API를 사용했고,
발급받은 Rest Api Key로 데이터를 불러왔습니다.

도서사이트를 차지하는 많은 정보들을 고려 하여
복잡한 레이아웃을 좀 더 간결하며 모던하게 만들었습니다.

Javascript, Jquery 를 사용하여 진열된 도서들의 동적인 기능을 추가했습니다.

더하여 Gallery 항목을 신설해 메인 페이지 하단에 배치 시켜서
유저의 편의성을 위해 Mouse drag slider 로 제작 하였습니다.

도서를 구매가능한 Sub Page, Login Popup 등을 제작했습니다.

# Mainpage
### Open API

사용자가 볼 수 있는 책에 관한 데이터입니다. <br>
Title, Thumbnail, Author, Contents 등의 데이터를 불러왔습니다.<br>
query에서 찾고자하는 데이터를 검색하여 연관된 정보들을 배치했습니다.

```
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


```

query: "문학 인문"에 관한 데이터 입니다.<br><br>
title의 경우 기존에 css로 구축해놓은 영역을 초과하여 
substring을 사용해 일정 글자 수 미만까지만 불러왔습니다.<br>
String "..." 을 추가해 제한된 title들의 통일성을 맞췄고, 
append 속성을 사용해 리스트의 0번째 자리에 정보들을 채워넣었습니다.<br>
하이퍼링크를 추가해 도서의 thumbnail을 클릭하면 서브 페이지로 이동할 수 있게 했습니다.<br><br>
해당 query를 검색했을 때 n번째의 정보 하나만 불러오도록 코딩을 했습니다.<br>
그러나 많은 양의 데이터를 불러오기에 적합하지 않다 판단하여,<br>
반복문을 사용해 원하는 만큼의 도서를 불러올 수 있도록 고쳤습니다.

```
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

```

만들어놓은 리스트의 li 갯수만큼 데이터를 삽입한 코드입니다.

