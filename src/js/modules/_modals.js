$(() => {

	$(document).on('click', '.js-close-modal', (e) =>{
		e.preventDefault();
		$.magnificPopup.close();			
	})

	$(document).on('click', '.js-modal', (e) => {

		e.preventDefault();

		$.magnificPopup.close();

		var	modal = $(e.currentTarget).attr('href') ? $(e.currentTarget).attr('href') : $(e.currentTarget).data('modal');

		var container_class = 'is-modal-open';

		if($(e.currentTarget).attr('data-youtube')){
			$(modal).append(`<iframe width="1043" height="587" src="https://www.youtube.com/embed/${$(e.currentTarget).data('youtube')}?autoplay=1&showinfo=0&rel=0&controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)
		}

		if($(e.currentTarget).attr('data-input')){
			$(modal + ' input[name="form"]').val($(e.currentTarget).data('input'))
		}

		$.magnificPopup.open({
			tClose: 'Закрыть',
			removalDelay: 400,
			fixedContentPos: true,
			fixedBgPos: true,
			overflowY: 'hidden',			
			closeMarkup: '<div class="modals__close close js-close-modal"><svg class="icon icon-close close" viewBox="0 0 612 612"><use xlink:href="/app/icons/sprite.svg#close"></use></svg></div>',
			mainClass: 'css-modal-animate',				
			items: {
				src: modal,
				type: 'inline'
			},
			callbacks: {
				beforeOpen: () => {
					$('body').addClass(container_class)
				},
				beforeClose: () => {
					$('body').removeClass(container_class)
				},
				afterClose: () => {
					$('.video iframe').remove()
				}
			}
		}, 0);
	})	
})