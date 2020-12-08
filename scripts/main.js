// Setup
body = document.body;

var query = query => {
	return document.querySelector(query);
};
var queryAll = query => {
	return document.querySelectorAll(query);
};




// Page transition
const loader = query('#loader');

const enter = () => {
	loader.classList.add('is-slideOut');
};
const exit = () => {
	loader.classList.replace('is-slideOut', 'is-slideIn');
};

window.addEventListener('load', enter);




// Link click delay
const links = queryAll('a:not([no-delay])');

links.forEach(link => {
	link.addEventListener('click', e => {
		let linkURL = link.getAttribute('href');

		e.preventDefault();
		setTimeout(() => {
			window.location = linkURL;
		}, 600);
		exit();
	});
});




// Navigation
const navToggle = query('#navToggle');

const nav = () => {
	const iconMenu = query('#iconMenu');
	const main = query('#main');
	const header = query('#header');

	iconMenu.classList.toggle('is-open');
	main.classList.toggle('is-close');
	header.classList.toggle('is-open');
};

navToggle.addEventListener('click', nav);




// Tabs
const tabs = queryAll('[data-tab]');
const tabContents = queryAll('[data-tab-content]');

tabs.forEach(tab => {
	const tabSelect = () => {
		const target = query(tab.dataset.tab);
		const removeClass = (elements) => {
			elements.forEach(element => {
				element.classList.remove('is-active');
			});
		};

		removeClass(tabs);
		removeClass(tabContents);

		tab.classList.add('is-active');
		target.classList.add('is-active');
	};

	tab.addEventListener('click', tabSelect);
});




// Image lightbox
if (body.classList.contains('gallery')) {
	const lightbox = document.createElement('div');
	body.appendChild(lightbox);
	lightbox.classList.add('lightbox');


	const images = queryAll('.galleryImage');

	images.forEach(image => {
		image.addEventListener('click', e => {
			const lightboxImage = document.createElement('img');

			while (lightbox.firstChild) {
				lightbox.removeChild(lightbox.firstChild);
			};

			lightbox.appendChild(lightboxImage);
			lightbox.classList.add('is-open');
			lightboxImage.classList.add('lightboxImage');
			lightboxImage.src = image.src;

			setTimeout(() => {
				lightbox.classList.add('is-fadeIn');
				lightboxImage.classList.add('is-fadeIn');
			}, 20);

			lightbox.addEventListener('click', e => {
				if (e.target !== e.currentTarget) return;

				lightbox.classList.remove('is-fadeIn');
				lightboxImage.classList.remove('is-fadeIn');
				setTimeout(() => {
					lightbox.classList.remove('is-open');
				}, 250);
			});
		});
	});
}
