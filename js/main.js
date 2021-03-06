$(document).ready(function(){

	//when i click on the menu icon
	//show the nav
	//when i click on the menu icon again
	//hide the nav
	$('.nav-icon').on('click', function(){
		$('.site-nav ul').slideToggle();
	});
	// when click on nav-icon don't scroll to top by default
	$('.nav-icon').click(function(e){
		e.preventDefault();
	});

	//when i resize the window large
	//show the menu and hide the icon
	//when i resize the window small
	//show the icon and hide the menu
	$(window).on('resize', function(){
		var width = $(window).width();
		var breakpoint = 640;
		if (width>breakpoint){
			$('.nav-icon').hide();
			$('.site-nav ul').show();
		}else{
			$('.nav-icon').show();
			$('.site-nav ul').hide();
		}

	});
	$(".fancybox-thumb").fancybox({
		prevEffect	: 'none',
		nextEffect	: 'none',
		helpers	: {
			title	: {
				type: 'outside'
			},
			thumbs	: {
				width	: 50,
				height	: 50
			}
		}
	});
});

