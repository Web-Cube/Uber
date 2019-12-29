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

	let mainSliderSelector = '.winners__slider_top',
		autoplayInterval = 3000,
		currentSl = 0,
		interleaveOffset = 0.5;


	  let mainSliderOptions = {
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
			},
			slidesPerView: 1,
			loopAdditionalSlides: 10,
	        speed:1000,
	        grabCursor: true,
	        watchSlidesProgress: true,
	        autoplay: false,
	        on: {
	        	slideChange: function() {
	        		let swiper = this;
					let currentIndex = swiper.realIndex;
					let name = $(swiper.slides[currentIndex]).data('name');
					let youtube = $(swiper.slides[currentIndex]).data('youtube');

					$('.winners__name').html(name)
					$('.winners__play').attr("data-youtube", youtube)
	        	},
	          imagesReady: function(){
	            let swiper = this;
	            let totalSlides = $(this.el).find('.swiper-slide:not(.swiper-slide-duplicate)').length;
	            let currentIndex = swiper.realIndex + 1;
	            this.el.classList.remove('loading');
	          },
	          progress: function(){
	            let swiper = this;

	            for (let i = 0; i < swiper.slides.length; i++) {
	              let slideProgress = swiper.slides[i].progress,
	                  innerOffset = swiper.width * interleaveOffset,
	                  innerTranslate = slideProgress * innerOffset;
	             
	              swiper.slides[i].querySelector(".winners__item-img").style.transform =
	                "translateX(" + innerTranslate + "px)";
	            }
	          },
	          touchStart: function() {
	            let swiper = this;

	            for (let i = 0; i < swiper.slides.length; i++) {
	              swiper.slides[i].style.transition = "";
	            }

	          },
	          setTransition: function(speed) {
	            let swiper = this;
	            for (let i = 0; i < swiper.slides.length; i++) {
	              swiper.slides[i].style.transition = speed + "ms";
	              swiper.slides[i].querySelector(".winners__item-img").style.transition =
	                speed + "ms";
	            }
	          }
	        }
	      };

	  if($(mainSliderSelector).length > 0){
	    let mainSlider = new Swiper(mainSliderSelector, mainSliderOptions);
	  }

	// var galleryTop = new Swiper('.winners__slider_top', {
	// 	loop:true,
	// 	loopedSlides: 5, //looped slides should be the same
	// 	pagination: {
	// 		el: '.js-counter',
	// 		type: 'fraction',
	// 	  },
	// 	navigation: {
	// 		nextEl: '.winners__btn_next',
	// 		prevEl: '.winners__btn_prev',
	// 	},
	// 	thumbs: {
	// 		swiper: galleryThumbs,
	// 	}
	// });
})($)