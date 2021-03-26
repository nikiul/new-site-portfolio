

	// Счетчик
	$.fn.jQuerySimpleCounter = function( options ) {
	    var settings = $.extend({
	        start:  0,
	        end:    100,
	        easing: 'swing',
	        duration: 400,
	        complete: ''
	    }, options );

	    var thisElement = $(this);

	    $({count: settings.start}).animate({count: settings.end}, {
			duration: settings.duration,
			easing: settings.easing,
			step: function() {
				var mathCount = Math.ceil(this.count);
				thisElement.text(mathCount);
			},
			complete: settings.complete
		});
	};


	$('#number1').jQuerySimpleCounter({end: 15,duration: 3000});
	$('#number2').jQuerySimpleCounter({end: 15,duration: 3000});
	// $('#number3').jQuerySimpleCounter({end: 359,duration: 2000});
	// $('#number4').jQuerySimpleCounter({end: 246,duration: 2500});
  

	// Карусели
	$(document).ready(function(){
		var skillCarosuel1 = $("#skills-carousel1");
		var skillCarosuel2 = $("#skills-carousel2");

		function skillCarosuel1Init() {
			if($('body').children(skillCarosuel1) && $(window).width() < 845){
				skillCarosuel1.owlCarousel({
					margin: 10,
					loop: true,
					nav: true,
					// pagination: true,   
					dots: false,
					// navText : ["",""],
					// responsiveClass:true,
					// responsiveBaseElement:"body",
					responsive:{
						0:{
							items:3
						},
						563: {
							items: 3 
						}
					}
				});
			}else{
				skillCarosuel1.trigger('destroy.owl.carousel')
			}; 
		};

		function skillCarosuel2Init() {
			if($('body').children(skillCarosuel2) && $(window).width() < 845){
				skillCarosuel2.owlCarousel({
					margin: 10,
					loop: true,
					nav: true,
					// pagination: true,   
					dots: false,
					// navText : ["",""],
					// responsiveClass:true,
					// responsiveBaseElement:"body",
					responsive:{
						0:{
							items:3
						},
						563: {
							items: 3 
						}
					}
				});
			}else{
				skillCarosuel2.trigger('destroy.owl.carousel')
			}; 
		};
	
		skillCarosuel1Init();
		skillCarosuel2Init();

		$(window).resize(function(){
			skillCarosuel1Init();
			skillCarosuel2Init();
		});
	}); 

	$('.feedback-carousel').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		dots: false,
		responsive:{
			0:{
				items:1
			}
		}
	})

