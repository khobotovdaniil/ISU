function groupClasses() {
	const buttons = document.querySelectorAll('.group__button');
	const classes = document.querySelectorAll('.group__class');

	document.querySelector('.group__buttons').addEventListener('click', (e) => {
		const target = e.target;
		buttons.forEach((item, i) => {
			if (target == item) {
		
				buttons.forEach((item) => {
					item.setAttribute('disabled', '');
					if (item.classList.contains('button-active')) {
						item.classList.remove('button-active');
					}
					setTimeout(() => {
						item.removeAttribute('disabled', '');
					}, 500);
				})

				classes.forEach((item) => {
					if (item.classList.contains('group__class-active') && item != classes[i]) {
						item.classList.remove('group__class-active');
						item.classList.add('group__class-exit');
						setTimeout(() => {
							item.classList.remove('group__class-exit');
						}, 500);
						setTimeout(() => {
							classes[i].classList.add('group__class-active');
						}, 500);
					}
				})

				item.classList.add('button-active');
			};
		});
	});
}

export default groupClasses;