import AOS from 'aos';

(() => {


	let init = () => {
		AOS.init({
			duration: 600,
			offset: 400,
			once: true,
			disable: () => {
				let maxWidth = 1025;
				return window.innerWidth < maxWidth;
			}
		});
	}

	if(window.innerWidth < 1025)
		init()

	$(window).on('load', () => {
		if(window.innerWidth > 1025)
			setTimeout(init, 100)
	})

})($)
