$(document).ready(function(){
	$('.nav').click(function(e){
		e.preventDefault();
		$('#dynamic').load($(this).attr('href'));
		$('.nav').parent().css({'background-color': 'transparent', 'font-weight': 'normal'});
		$(this).parent().css({'background-color': '#FFCCBC', 'font-weight': 'bold'});
	});

	$('.pageNav').click(function(c){
		c.preventDefault();
		$('#dynamic2').load($(this).attr('href'));
		$('.init').empty();
		$('.main').css("display", "block");
		$('#subNav').removeClass("sub_nav responsive").addClass("sub_nav");
	});
});

function navBar() {
    var x = document.getElementById("subNav");
    if (x.className === "sub_nav") {
        x.className += " responsive";
    } else {
        x.className = "sub_nav";
    }
}
