var timer = window.setInterval(logout, 600000);
var i = 0;
function logout(){
	alert("10 minutes over.. Tab will be closed now");
	window.close();
}
