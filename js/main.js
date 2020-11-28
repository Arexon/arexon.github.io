// Setup
var query = query => {
	return document.querySelector(query);
}
var queryAll = query => {
	return document.querySelectorAll(query);
}

body = document.body;




// Page transition
const loader = query('#loader');


// On enter/exit
function enter() {
	loader.classList.add('slide-out');
}
function exit() {
	loader.classList.replace('slide-out', 'slide-in');
}

window.addEventListener('load', enter);




// Link click delay
const links = queryAll('a:not([download])');

links.forEach(function(link) {
	link.onclick = e => {
		let linkURL = link.getAttribute('href');
		e.preventDefault();
		setTimeout(() => {
			window.location = linkURL;
		}, 600)
		exit();
	}
});




// Image lightbox
if (body.classList.contains('gallery')) {
	const lightbox = document.createElement('div');
	body.appendChild(lightbox);
	lightbox.classList.add('lightbox', 'layout-0');


	const images = queryAll('.galleryImage');

	images.forEach(image => {
		image.onclick = e => {
			const lightboxImage = document.createElement('img');

			while (lightbox.firstChild) {
				lightbox.removeChild(lightbox.firstChild);
			};

			lightbox.appendChild(lightboxImage);
			lightboxImage.classList.add('lightboxImage');
			lightboxImage.src = image.src;
			lightbox.classList.add('is-open');

			setTimeout(() => {
				lightbox.classList.add('fadeIn');
				lightboxImage.classList.add('fadeIn');
			}, 20);

			lightbox.addEventListener('click', e => {
				if (e.target !== e.currentTarget) return
				lightbox.classList.remove('fadeIn');
				lightboxImage.classList.remove('fadeIn');
				setTimeout(() => {
					lightbox.classList.remove('is-open');
				}, 250);
			});
		};
	});
}





// Navigation
const navToggle = query('#navToggle');

function nav() {
	let iconMenu = query('#iconMenu');
	let main = query('#main');

	iconMenu.classList.toggle('is-open');
	main.classList.toggle('is-close');
};

navToggle.addEventListener('click', nav);
