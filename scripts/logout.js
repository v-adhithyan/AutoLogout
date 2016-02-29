//for production
//var timer = window.setInterval(fb, 600000);
//for testing
var timer = window.setInterval(logout, 3000);

function logoutCheck(action){	
	if(action.indexOf("logout") > 0){
		return true;
	}
	else if(action.indexOf("signout") > 0){
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

	console.log("current page:"+currentPage);

	if(currentPage.indexOf("twitter") > 0){
		
		var signoutButton = document.getElementById("signout-button");
		
		if(logoutCheck(signoutButton.id)){
			alert("You will be logged out now.");
			signoutButton.click();		
		}

	}
	else if(currentPage.indexOf("quora") > 0){
		
		var logoutForm = document.getElementsByTagName("form")[0];
		
		if(logoutCheck(logoutForm.action)){
			alert("You will be logged out now.");
			 document.getElementsByTagName("form")[0].submit();
		}

	}
	else{
		
		console.log("no logout");
		alert("close tab now.");
	
	}

	stopTimer();
}
