import WOW from 'wow.js';

import groupClasses from './modules/groupClasses';
import highlightMenuObjects from './modules/highlightMenuObjects';
import modals from './modules/modals';
import maskForForms from './modules/maskForForms';
import checkboxValidation from './modules/checkboxValidation';
import glideSliders from './modules/glideSliders';


window.addEventListener('DOMContentLoaded', () => {

	//Menu: static/dynamic 
	const logoBlock = document.getElementById('logoblock');

	window.onscroll = function () {
		if (window.pageYOffset>80) {
            logoBlock.classList.add('header__logoblock-wide');
            logoBlock.classList.remove('header__logoblock-normal');
        } else {
            logoBlock.classList.add('header__logoblock-normal'); 
            logoBlock.classList.remove('header__logoblock-wide');
		}
	};

	//WoW.js
	const wow = new WOW({
		boxClass: 'wow',
		animateClass: 'animated',
		offset: 100,
		mobile: true,  
		live: true,
	});
	wow.init();

	modals();

	maskForForms();

	checkboxValidation();

	try {
		glideSliders();
	} catch(e) {}

	

	try {
		groupClasses();
	} catch(e) {}
	
	highlightMenuObjects('.menu__item__link', 'menu__item__link-active');

});