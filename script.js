$(document).ready(function(){
	$('.nav').click(function(e){
		e.preventDefault();
		$('#dynamic').load($(this).attr('href'));
	});

	$('.pageNav').click(function(c){
		c.preventDefault();
		$('#dynamic2').load($(this).attr('href'));
	});
});
