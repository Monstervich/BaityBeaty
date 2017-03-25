window.onbeforeunload = function () {
  window.scrollTo(0,0);
}

function openNav(id) {
	if(id.match('mob-nav')){
    	document.getElementById(id).style.width = "100%";
    	document.getElementById(id).style.fontSize = "80%";
    }
}

function closeBar(id2) {
    document.getElementById(id2).style.width = "0px";
    document.getElementById(id2).style.fontSize = "0%";
}