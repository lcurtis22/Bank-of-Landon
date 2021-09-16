
function buttonChange(button) {

  document.getElementById("buttonText").innerHTML  = "<vfont>Selected button:" + button + "</vfont>";
}

function buttonChangePage(){
	document.body.innerHTML += "<center><h2><vfont>Login:</vfront></h2></center>";
	document.body.innerHTML += "<center><h3><vfont>Password:</vfront></h2></center>";
}