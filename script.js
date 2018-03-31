$(document).ready(function(){
	$('.nav').click(function(e){
		e.preventDefault();
		$('#dynamic').load($(this).attr('href'));
		$(this).parent().css({'background-color': 'transparent', 'font-weight': 'normal'});
		$(this).parent().css({'background-color': '#FFCCBC', 'font-weight': 'bold'});
	});

	$('.pageNav').click(function(c){
		c.preventDefault();
		$('#dynamic2').load($(this).attr('href'));
		$('.init').empty();
		$('.main').css("display", "block");
	});
});
