// Page transition
var loader = document.querySelector('#loader');


// On enter/exit
function enter() {
	loader.classList.add('slide-out');
}
function exit() {
	loader.classList.replace('slide-out', 'slide-in');
}

window.addEventListener('load', enter);




// Delay
var links = document.querySelectorAll('a:not([download])');

links.forEach(function(link) {
	link.onclick = (e) => {
		let linkURL = link.getAttribute('href');
		e.preventDefault();
		setTimeout(() => {
			window.location = linkURL;
		}, 600)
		exit();
	}
});




// Navigation
var navToggle = document.querySelector('#navToggle');
var main = document.querySelector('#main');

function nav() {
	let iconMenu = document.querySelector('#iconMenu');
	let main = document.querySelector('#main');

	iconMenu.classList.toggle('is-open');
	main.classList.toggle('is-close');
};

navToggle.addEventListener('click', nav);
