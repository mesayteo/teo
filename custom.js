$('.ui.embed').embed({
	autoplay: false,
	hd: true
});

//hide the social card

$('.card').not('.active').hide();

// utility functions
function toggle_cards(){

	$('.card:visible').transition({
		animation: 'fly down out',
		duration: 150,
		onComplete: function(){
			$('.card').toggleClass('active');
			$('.active').transition('fly down in', 150);
			
		}
	})
}


// on @mesayteo click
	$('.toggle').click(function(event){
		
		event.preventDefault();
		// $(this).children('i').toggleClass('blue');
		toggle_cards();
	}); // end playlist button
