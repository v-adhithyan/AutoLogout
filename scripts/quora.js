var timer = window.setInterval(logout, 600000);

function logout(){
	var newsFeedCheck = document.getElementsByClassName("selector_input text")[0];	
	
	if(!isUndefined(newsFeedCheck)){
		var logoutForm = document.getElementsByTagName("form")[0];
		
		if(!isUndefined(logoutForm)){
			showLogoutAlert();			
			document.getElementsByTagName("form")[0].submit();
		}
	}

	stopTimer();
}