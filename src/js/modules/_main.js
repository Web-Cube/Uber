$(document).ready(function(){
	
	$(".header__lang").click(function(){
		$(this).toggleClass("active");
		return false;
	});
	
	$(".js-scroll-to").click(function() {
        var attr_href = $(this).attr("href");
        var data_href = $(this).data("href");
        if ( data_href ) {
            attr_href = data_href;
        }
		if ( $(window).outerWidth() < 800 ) {
			$("html, body").animate({
				scrollTop: $(attr_href).offset().top - $(".mobile").outerHeight() + "px"
			}, {
				duration: 1000
			});
			$(".header__burger").click();
		} else {
			$("html, body").animate({
				scrollTop: $(attr_href).offset().top + "px"
			}, {
				duration: 1000
			});
		}
        return false;
    });
	
	$(".js-svg").each(function(){
        var svg_src = $(this).data("svg-src");
        $(this).load(svg_src);
    });
	
	$(".faq__item").click(function(){
		
		if ( $(this).hasClass("active") ) {
			
			$(this).removeClass("active").find(".faq__content").slideUp(300);
			
		} else {
			
			$(".faq__item.active").removeClass("active").find(".faq__content").slideUp(300);
			
			$(this).addClass("active").find(".faq__content").slideDown(300);
			
		}
		
	});
	
	$(".faq__item:first").click();
	
	$(".header__burger").click(function(){
		$(this).toggleClass("active");
		$(".mobile").slideToggle(300);
		
		if ( $(window).width() < 400 ) {
			
			if ( $(this).hasClass("active") ) {
				$('body').css("overflow","hidden");
			} else {
				$('body').css("overflow","auto");
			}
			
		}
	});

});
/* viewport width */
function viewport(){
    var e = window, 
        a = 'inner';
    if ( !( 'innerWidth' in window ) )
    {
        a = 'client';
        e = document.documentElement || document.body;
    }
    return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
};
/* viewport width */

function animateme() {
    var viewport_height = viewport().height;
    var scroll_top = $(window).scrollTop();
    $(".js-animateme").each(function(){
        var animate_pos = $(this).offset().top;
        var animate_offset = $(this).data("animate-offset");
        var animate_delay = $(this).data("animate-delay");
        var animate = $(this).data("animate-class");
        var win_scroll = scroll_top + viewport_height - animate_offset;
        $(this).css("transition-delay",animate_delay+"ms");
        if ( win_scroll >= animate_pos ) {
            $(this).addClass(animate);
        } else {
            $(this).removeClass(animate);
        }
    });
}

//Анимации по странице
$(window).scroll(function(){
    var viewport_height = viewport().height;
    var viewport_width = viewport().width;
    var scroll_top = $(window).scrollTop();
    
    animateme();
    
    $(".js-paralax").each(function(){
        var paralax_pos = $(this).offset().top;
        var paralax_side = $(this).data("paralax-side");
        var paralax_step = $(this).data("paralax-step");
        if ( paralax_side == 'bottom') {
            $(this).attr("style","transform: translateY(" + (-scroll_top - paralax_pos )/paralax_step + "px)" );
        } 
        if ( paralax_side == 'left') {
            $(this).attr("style","transform: translateX(" + (scroll_top - paralax_pos + viewport_height )/paralax_step + "px)" );
            if ( viewport_width < viewport_height ) {
                $(this).attr("style","transform: translateX(" + (scroll_top - paralax_pos + ( viewport_height/2 ) )/paralax_step + "px)" );
            }
        } else {
            $(this).attr("style","transform: translateY(" + (scroll_top - paralax_pos )/paralax_step + "px)" );
        }
    });

});