function login(name) { 
	let cookie = document.cookie; if (document.cookie != ""){
		let cookie_array = cookie.split("; "); for ( let index in cookie_array) { 
			const cookie_name = cookie_array[index].split("=");
			if (cookie_name[0] == "popupYN") { 
				return cookie_name[1]; 
			} 
		} 
	} return ; 
} 
function loginPopUP(url) 
{ let cookieCheck = login("popupYN"); 
if (cookieCheck != "N") window.open(url, 'login_popup.html', 'width=599,height=599,left=1000,top=0');
}