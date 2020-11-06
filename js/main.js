body = document.body;
html = document.documentElement;



var header = document.querySelector('.header');
var headerNavToggle = document.querySelector('.header-nav-toggle');
var iconNavOpen = document.querySelector('.icon-nav-open');
var iconNavClose = document.querySelector('.icon-nav-close');
var main = document.querySelector('.main');


headerNavToggle.addEventListener('click', function() {
	this.classList.toggle('pressed');
	setTimeout(function() {
		iconNavOpen.classList.toggle('pressed') + iconNavClose.classList.toggle('pressed');
	}, 250);
	header.classList.toggle('expand');
	main.scrollTop < 100 ? (header.classList.contains('colorize') ? header.classList.remove('colorize') : header.classList.add('colorize')) : false;
});


main.onscroll = function() {
	main.scrollTop > 100 ? header.classList.add('colorize') : header.classList.remove('colorize');
};