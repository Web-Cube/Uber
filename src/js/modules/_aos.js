import AOS from 'aos';

(() => {

	let init = () => {
		AOS.init({
			duration: 600,
			offset: 200,
			once: true,
			disable: () => {
				let maxWidth = 1025;
				return window.innerWidth < maxWidth;
			}
		});
	}

	$(window).on('load', () => {
		setTimeout(init, 500)
	})

})($)
