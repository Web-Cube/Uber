import lottie from "lottie-web";

(() => {

	let elements = $('.js-lottie');

	if(!elements.length)
		return false;

	let lottie_anim = (loader, file) => {
		var animItem = lottie.loadAnimation({
			wrapper: loader,
			animType: 'svg',
			autoplay: true,
			loop: true,
			path: file
		});
	}

	if(elements.length > 0){

		elements.each((i, el) => {
		    let file  = '/app/json/' + $(el).data('file') + '/data.json';
			lottie_anim(el, file)
		})

	}	

})($)