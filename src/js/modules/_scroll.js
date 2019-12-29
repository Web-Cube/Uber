import LocomotiveScroll from 'locomotive-scroll';
(() => {
	// $(window).on('load', () => {
	const scroll = new LocomotiveScroll({
	    el: document.querySelector('.main-wrap'),
	    smooth: true,
	});		
	// })

})($)