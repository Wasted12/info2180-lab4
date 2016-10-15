var x = $("div#maze div.boundary");

window.onload = function(){
	//document.getElementById("boundary1").onmouseover = losefunction;
	for (var i=0; i < x.length; i++){
		x[i].onmouseover = indfunction;
	}
}


/*function losefunction(){
	document.getElementById("boundary1").className = "boundary youlose";
}*/

function indfunction(){
	//document.querySelectorAll(".boundary").className = "boundary youlose";
	for (var i=0; i < x.length; i++){
		x[i].className = "boundary youlose";
	}
}
