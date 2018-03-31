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

	quoteArray= [
	'Live as if you were to die tomorrow. Learn as if you were to live forever." - Gandhi', 
	'"Education is the most powerful weapon you can use to change the world." - Nelson Mandela', 
	'"An investment in knowledge pays the best interest." - Benjamin Franklin',
	'"Give a man a fish and you feed him for a day; teach a man to fish and you feed him for a lifetime." - Maimonides'];
	count = 0;
	setInterval(function () {
    	count++;
    	$("#quote").fadeOut(400, function () {
      $(this).text(quoteArray[count % quoteArray.length]).fadeIn(400);
    });
  }, 4000);
});

function navBar() {
    var x = document.getElementById("subNav");
    if (x.className === "sub_nav") {
        x.className += " responsive";
    } else {
        x.className = "sub_nav";
    }
}
