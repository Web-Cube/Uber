import Swiper from 'swiper';


(()=>{
	if ( $(window).outerWidth() > 580 ) {
		var galleryThumbs = new Swiper('.winners__slider_bottom', {
			  slidesPerView: 6,
			  loop: false,
			  freeMode: true,
			  loopedSlides: 5, //looped slides should be the same
			  watchSlidesVisibility: true,
			  watchSlidesProgress: true,
			  breakpoints: {
				580: {
				  slidesPerView: 4,
				},
				800: {
				  slidesPerView: 6,
				},
			  }
		});
	};
	var galleryTop = new Swiper('.winners__slider_top', {
		loop:true,
		loopedSlides: 5, //looped slides should be the same
		pagination: {
			el: '.js-counter',
			type: 'fraction',
		  },
		navigation: {
			nextEl: '.winners__btn_next',
			prevEl: '.winners__btn_prev',
		},
		thumbs: {
			swiper: galleryThumbs,
		}
	});
})($)