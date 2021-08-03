// 책 크게보기


$(function(){



const modal = document.getElementById("myModal");

const mainBookImg = document.getElementById('mainBookImg');

const headerDisplay =document.querySelector('header');

let img = document.getElementById("bigSizeImg");
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = mainBookImg.src;
  captionText.innerHTML = mainBookImg.alt;
  headerDisplay.style.zIndex = 1;
}


let span = document.getElementsByClassName("close")[0];


span.onclick = function() { 
  modal.style.display = "none";
  headerDisplay.style.zIndex = 5;
}



});


