import Glide from '@glidejs/glide';
import WOW from 'wow.js';

window.addEventListener('DOMContentLoaded', () => {

	//static/dynamic menu
	const logoBlock = document.getElementById('logoblock');

	window.onscroll = function () {
		if (window.pageYOffset>150) {
            logoBlock.classList.add('header__logoblock-wide');
            logoBlock.classList.remove('header__logoblock-normal');
        } else {
            logoBlock.classList.add('header__logoblock-normal'); 
            logoBlock.classList.remove('header__logoblock-wide');
		}
	};

	var glide = new Glide('.glide', {
		type: 'carousel',		
		startAt: 0,
		perView: 1,
		gap: 0,
		autoplay: 5000,
		hoverpause: false,
		animationTimingFunc: 'ease-in-out',
		animationDuration: 1000,
	});

	glide.mount();


	const wow = new WOW({
		boxClass: 'wow',
		animateClass: 'animated',
		offset: 0,
		live: true
	});

	wow.init();
});