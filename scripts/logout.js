var timer = window.setInterval(logout, 10000);
var i = 0;
alert("injected");
function logout(){
	i++;
	if(i == 1){
		//window.location = "http://stackoverflow.com/users/logout";
		var logout = document.getElementsByClassName("_54nh");
		console.log("logout"+logout[0].text);
		//alert(logout);
		//logout.click();
	}
}
