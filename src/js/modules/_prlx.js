import Parallax from 'parallax-js'

$(() => {

	let $scene = $('.js-scene');
	let parallaxInstance = [];
	let ww = $(window).width();

	if(!$scene.length || ww <= 768)
		return false;

	$scene.each((i, el) => {
		let params = {};

		if($(el).attr('data-limit-y'))
			params['limitY'] = 0;

		parallaxInstance[i] = new Parallax(el, params);		
	})

	// console.log('run scene')


	// var scenes = [];
	// var scenesSelector = document.querySelectorAll('.js-scene');
	// for(var i=0; i<scenesSelector.length; i++){
	//     scenes[i] = new Parallax(scenesSelector[i]);
	// }
})