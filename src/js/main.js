import Glide from '@glidejs/glide';

window.addEventListener('DOMContentLoaded', () => {

	//static/dynamic menu
	const logoBlock = document.getElementById('logoblock');

	window.onscroll = function () {
		if (window.pageYOffset>200) {
            logoBlock.classList.add('header__logoblock-wide');
            logoBlock.classList.remove('header__logoblock-normal');
        } else {
            logoBlock.classList.add('header__logoblock-normal'); 
            logoBlock.classList.remove('header__logoblock-wide');
		}
	};


	new Glide('.glide', {
		type: 'carousel',
		startAt: 0,
		perView: 1
	}).mount();

});