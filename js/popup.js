function getCookie(name) { 
	let cookie = document.cookie; if (document.cookie != ""){
		let cookie_array = cookie.split("; "); for ( let index in cookie_array) { 
			const cookie_name = cookie_array[index].split("=");
			if (cookie_name[0] == "popupYN") { 
				return cookie_name[1]; 
			} 
		} 
	} return ; 
} 
function openPopup(url) 
{ let cookieCheck = getCookie("popupYN"); 
if (cookieCheck != "N") window.open(url, '', 'width=420,height=500,left=0,top=0') 
}