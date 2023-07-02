import Glide from '@glidejs/glide';
import WOW from 'wow.js';

import groupClasses from './modules/groupClasses';
import highlightMenuObjects from './modules/highlightMenuObjects';


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

	//Slider
	const mainSlider = new Glide('.slider', {
		type: 'carousel',		
		startAt: 0,
		perView: 1,
		gap: 0,
		autoplay: 5000,
		hoverpause: false,
		animationTimingFunc: 'ease-in-out',
		animationDuration: 1000,
	});
	mainSlider.mount();


	//WoW.js
	const wow = new WOW({
		boxClass: 'wow',
		animateClass: 'animated',
		offset: 100,
		mobile: false,  
		live: true,
	});
	wow.init();

	//group Classes slider
	groupClasses();
	
	highlightMenuObjects('.menu_item__link', 'menu_item__link-active');

	
});