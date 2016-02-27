var timer = window.setInterval(logout, 3000);

function quoraLogoutCheck(action){	
	if(action.indexOf("logout") > 0){
		return true;
	}
	return false;
}

function stopTimer(){
	clearTimeout(timer);
}

function logout(){
	var currentPage = window.location.href;
	var logoutForm = document.getElementsByTagName("form")[0];

	if(quoraLogoutCheck(logoutForm.action)){
		alert("You will be logged out now.");
		document.getElementsByTagName("form")[0].submit();
	}else{
		console.log("no logout");
	}
	
	stopTimer();
}
