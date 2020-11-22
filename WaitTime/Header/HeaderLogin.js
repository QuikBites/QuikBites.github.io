var loginDetail = window.localStorage.getItem("Email");
	
//Checks if user has been logged in
if (loginDetail != null && loginDetail != "") {
	//Is logged in, show email
	document.getElementById("LoginB").innerHTML = loginDetail + " | Sign out";
}

function loginClick() {
	var LOGIN_REDIRECT = "./login.html"
	
	//Gets Login details
	var loginDetail = window.localStorage.getItem("Email");
	
	//Checks if user has been logged in
	if (loginDetail != null && loginDetail != "") {
		//Is logged in, ask to log out
		if(confirm("Are you sure you want to log out?")) {
			//They want to log out
			//Set login detail to nothing and refresh page
			window.localStorage.setItem("Email", "");
			window.location.reload(false);
			return false;
		}
	} else {
		//Not logged in, redirect to login page
		window.top.location.href = LOGIN_REDIRECT;
	}
}