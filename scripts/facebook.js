var timer = window.setInterval(logout, 600000);
//var timer = window.setInterval(logout, 30000);

function logout(){
	var insertedNodes = [];
	var observer = new WebKitMutationObserver(function(mutations){
			//console.log("dom change");
	mutations.forEach(function(mutation){
		for(var j=0; j<mutation.addedNodes.length; j++)
			insertedNodes.push(mutation.addedNodes[j]);
				//console.log("j"+insertedNodes[j].id);
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

	stopTimer();
}