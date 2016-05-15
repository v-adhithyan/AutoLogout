
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

