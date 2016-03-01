var timer = window.setInterval(logout, 600000);

function stopTimer(){
	clearTimeout(timer);
}

function isUndefined(obj){
	if(typeof obj === 'undefined')
		return true;
	else if(!obj)
		return true;
	return false;
}

function showLogoutAlert(){
	alert("10 minutes up. You will be logged out now.");
}

function logout(){
	var currentPage = window.location.href;
	var logoutForm = document.getElementsByTagName("form")[0];

	//console.log("current page:"+currentPage);

	if(currentPage.indexOf("twitter") > 0){
		
		var signoutButton = document.getElementById("signout-button");
	
		if(!isUndefined(signoutButton)){
			showLogoutAlert();	
			signoutButton.click();		
		}

	}
	else if(currentPage.indexOf("quora") > 0){
		
		var newsFeedCheck = document.getElementsByClassName("selector_input text")[0];	
	
		if(!isUndefined(newsFeedCheck)){
			var logoutForm = document.getElementsByTagName("form")[0];
		
			if(!isUndefined(logoutForm)){
				showLogoutAlert();			
				document.getElementsByTagName("form")[0].submit();
			}
		}

	}
	else if(currentPage.indexOf("facebook") > 0){
		var insertedNodes = [];
		var observer = new WebKitMutationObserver(function(mutations){
			console.log("dom change");
			mutations.forEach(function(mutation){
				for(var j=0; j<mutation.addedNodes.length; j++)
				insertedNodes.push(mutation.addedNodes[j]);
				console.log("j"+insertedNodes[j].id);
			})

			var logoutForm = document.getElementsByClassName("_w0d")[0];
			if(!isUndefined(logoutForm)){
				observer.disconnect();
				showLogoutAlert();	
				logoutForm.submit();
			}
		});

		observer.observe(document, {
			attributes: true,
			childList: true,
			characterData: true,
			subtree: true
		});

		var logoutMenu = document.getElementById("userNavigationLabel");	
		if(!isUndefined(logoutMenu))
			logoutMenu.click();

	}

	stopTimer();
}
