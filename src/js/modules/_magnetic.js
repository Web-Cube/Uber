import {TweenMax, Power2} from "gsap";

(() => {

	if($(window).width() <= 768)
		return false;

	let parallaxIt = (e, target, movement) => {
		let $this = e.currentTarget;

		let boundingRect = $this.getBoundingClientRect();

		let relX = e.pageX - boundingRect.left;
		let relY = e.pageY - boundingRect.top;

		let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

		TweenMax.to(target[0], 0.3, {
			x: (relX - boundingRect.width/2) / boundingRect.width * movement,
			y: (relY - boundingRect.height/2 - scrollTop) / boundingRect.width * movement,
			ease: Power2.easeOut
		});		
	}

	let callParallax = (e, back) => {
		if (back) {
			parallaxIt(e, $(e.currentTarget).find('.magnetic-back'), 60);
		}
		parallaxIt(e, $(e.currentTarget).find('.magnetic-inner'), 40);
	}

	$('.magnetic-wrapper').each((i, el) => {
		let $wrapper = $(el);

		$wrapper.on('mouseleave', e => {
			let selector = $wrapper.find('.magnetic-back').length ? $wrapper.find('.magnetic-back, .magnetic-inner') : $wrapper.find('.magnetic-inner');
			TweenMax.to(e.currentTarget, 0.3, {scale: 1});
			TweenMax.to(selector, 0.3,{scale:1, x: 0, y: 0});			
		})

		$wrapper.on('mouseenter', e => {
			let back = $wrapper.find('.magnetic-back').length;
			let $back_item = $wrapper.find('.magnetic-back');
			

			TweenMax.to(e.currentTarget, 0.3, {transformOrigin: '0 0', scale: 1});

			if(!back)
				return false;	

			let back_scale = $back_item.attr('data-scale') ? Number($back_item.data('scale')) : 1.1;

			console.log(back_scale)

			TweenMax.to($back_item[0], 0.3, {scale: back_scale});			
		})

		$wrapper.on('mousemove', e => {
			let back = $wrapper.find('.magnetic-back').length;
			callParallax(e, back);
		})
	})


})($)