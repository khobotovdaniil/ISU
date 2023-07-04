import Glide from '@glidejs/glide';
import WOW from 'wow.js';

import groupClasses from './modules/groupClasses';
import highlightMenuObjects from './modules/highlightMenuObjects';


window.addEventListener('DOMContentLoaded', () => {

	//Menu: static/dynamic 
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

	//Glide sliders
	const mainSlider = new Glide('.slider', {
		type: 'carousel',		
		startAt: 0,
		perView: 1,
		gap: 0,
		autoplay: 5000,
		hoverpause: false,
		focusAt: 'center',
		animationTimingFunc: 'ease-in-out',
		animationDuration: 1000,
	});
	mainSlider.mount();

	const pricesSlider = new Glide('.prices', {
		type: 'carousel',		
		startAt: 0,
		perView: 3,
		gap: -30,
		breakpoints: {
			767: {
				perView: 2,
				gap: -70,
			},
			575: {
				perView: 1,
				gap: -250,
			},
			512: {
				perView: 1,
				gap: -180,
			},
			440: {
				perView: 1,
				gap: -100,
			},
			360: {
				perView: 1,
				gap: -70,
			},
			320: {
				perView: 1,
				gap: -50,
			}
		},
		autoplay: 5000,
		hoverpause: true,
		focusAt: 'center',
		animationTimingFunc: 'ease-in-out',
		animationDuration: 500,
	});
	pricesSlider.mount();

	const reviewsSlider = new Glide('.reviews', {
		type: 'carousel',		
		startAt: 0,
		perView: 1,
		gap: 0,
		autoplay: 5000,
		hoverpause: false,
		focusAt: 'center',
		animationTimingFunc: 'ease-in-out',
		animationDuration: 1000,
	});
	reviewsSlider.mount();


	//WoW.js
	const wow = new WOW({
		boxClass: 'wow',
		animateClass: 'animated',
		offset: 100,
		mobile: false,  
		live: true,
	});
	wow.init();

	//Group classes slider
	groupClasses();
	
	highlightMenuObjects('.menu_item__link', 'menu_item__link-active');

});