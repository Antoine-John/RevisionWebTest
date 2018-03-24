$(document).ready(function(){
	$('.nav').click(function(e){
		e.preventDefault();
		$('#dynamic').load($(this).attr('href'));
	});
});