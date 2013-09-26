/* Author: @joshuapekera at Bright Red */
// Init Fastclick
window.addEventListener('load', function() {
    FastClick.attach(document.body);
}, false);


// Animation Events
/*
$( document ).ready(function() {
  $('#hero-bread').addClass('animated slideInRight');
});
*/

// Animation Events with jQuery Fallbacks
/*
$( document ).ready(function() {
   if (Modernizr.csstransitions) {
       $('#hero-bread').addClass('animated slideInRight');
   } else {
       $('#hero-bread').animate({ 
       right: "-=2000px",
       }, 1000);
      // Animation complete.
   }
});
*/

/* Author: Joshua Pekera
 */
// Testimonial Timing Controls
function InOut(elem){
	elem.delay(0)//Time between Testimonials
	.fadeIn(300)//Speed of fadeIn transition
	.delay(6000)//Length of time before fadeOut
	.fadeOut(function(){
	if(elem.next().length > 0){
		InOut(elem.next());
	}
	else	{
			InOut( elem.siblings(':first'));
		}
	});
}
$(function(){
	$('#testimonial-wrapper li').hide();
	InOut( $('#testimonial-wrapper li:first') );
});

// Top panel drop-down
$('#btn_select_city').click(function(e) {
	e.preventDefault();
		$('#top-header-panel').slideToggle(200).css({
			visibility: "visible",
			display: "block"
		});
		$(this).toggleClass("active");
		$('#header').toggleClass('dropdown-enabled');
});

// Slider Swipe JS API Scripting
if ($("#slider")[0]) {
	window.mySwipe = new Swipe(document.getElementById('slider'), {
		startSlide: 0,
		speed: 300,
		auto: 6000,
		continuous: true,
		disableScroll: false,
		stopPropagation: false,
		callback: function(pos, index, elem) {
			var i = $navLi.length;
			while (i--) {
				$navLi[i].className = ' ';
			}
			$navLi[pos].className = 'on';
		},
		transitionEnd: function(index, elem) {}
	});
	var $navLi = $('#position li');
	$('#position li:first-child').addClass('on');
	if (window.jQuery || window.Zepto) {
		(function($) {
			$.fn.Swipe = function(params) {
				return this.each(function() {
					$(this).data('Swipe', new Swipe($(this)[0], params));
				});
			};
			if ($(".slider-paginate")[0]){
				$navLi.on('click', function() {
					window.mySwipe.slide(
					$(this).index() + 0, 200);
					$(this).siblings().removeClass('on');
					$(this).addClass('on');
				});
				$('#mySwipePrev').on('click', function() {
					mySwipe.prev();
					$navLi.removeClass('on');
					$navLi.eq(mySwipe.getPos() - 1).addClass('on');
				});
				$('#mySwipeNext').on('click', function() {
					mySwipe.next();
					$navLi.removeClass('on');
					$navLi.eq(mySwipe.getPos() - 1).addClass('on');
				});
			}
		})(window.jQuery || window.Zepto);
	}
}

// Modals
// ---------------------------------------------------------------

// Global AJAX Modal Wrapper
var $modal = $('#ajax-modal');

//Login Modal 
$('#authenticate-modal').on('click', function(){
  // create the backdrop and wait for next modal to be triggered
  $('body').modalmanager('loading');
 
  setTimeout(function(){
     $modal.load('modals.html', '', function(){
      $modal.modal();
    });
  }, 1000);
});
 
$modal.on('click', '.update', function(){
  $modal.modal('loading');
  setTimeout(function(){
    $modal
      .modal('loading')
      .find('.modal-body')
        .prepend('<div class="alert alert-info fade in">' +
          'Updated!<button type="button" class="close" data-dismiss="alert">&times;</button>' +
        '</div>');
  }, 1000);
});