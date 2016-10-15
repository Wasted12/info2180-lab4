window.onload = function(){
	document.getElementById("boundary1").onmouseover = losefunction;
}

function losefunction(){
	document.getElementById("boundary1").className = "boundary youlose";
}