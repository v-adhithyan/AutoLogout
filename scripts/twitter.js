var timer = window.setInterval(logout, 600000);

function logout(){
	var signoutButton = document.getElementById("signout-button");
	
	if(!isUndefined(signoutButton)){
		showLogoutAlert();	
		signoutButton.click();		
	}

	stopTimer();
}