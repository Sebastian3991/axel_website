const openCloseBtn = document.querySelector('.navbar-icon');


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

function openToCloseNav() {
  openCloseBtn.classList.toggle("change");
}

//home page nav bar animation
window.onload=function(){
const nav = document.querySelector('.navbar');
openCloseBtn.addEventListener('click', () => {
	// remove visible class if visible
	if(nav.classList.contains('visible'))
	{
		nav.classList.remove('visible');
		openToCloseNav();
	}
	 else{

	// add visible class if nav bar not showing
		nav.classList.add('visible');
		openToCloseNav();

	}
	})};



