//check for landing page
if(document.getElementById('landing-page-check')) {
	  //load home page when scrolled
	  document.body.addEventListener('wheel', () => {redirectLanding()}, false);
}

//landing page exit animation to home page  /////////hier gehts weiter oder nav bar
window.onbeforeunload = function(e){
    document.getElementById('myDiv').className = 'out';
}

function redirectLanding(){
	window.location.href = 'self.html';
}

function openToCloseNav(x) {
  x.classList.toggle("change");
}


