var primer_elemento  = $('#slides'),
	segundo_elemento = $('#registro'),
	tercer_elemento  = $('#contentd'),
	join     	     = $('#join'),
	title 			 = $('title'),
	nav				 = $('nav'),
	NOSE 			 = $('#last'),
	manuela			 = true;
nav.on('click', GET);
function GET() {
			if ( manuela ) {
		//New Text from Ajax-Json
						$.ajax({
							type: "GET",
							url: "http://192.168.1.107:8000/document.json",
							error: function (argument) { 
								console.log ("error : " + argument)
								return GET();
							}
						}).success( function (res) {
								// body...
								 contact = res;
									 if (contact == res) {
									 	console.log("res method get 200 ok")
									    }
									})  // 200
						}
		kill();
}
function kill () {
	manuela = false;
}
function give_me_join ( x ) {
		// Go Join Page
		title[0].innerHTML = 'Join - team of moving gamers';
		primer_elemento.slideUp()
		segundo_elemento.slideUp()
		tercer_elemento.slideToggle()
		// primer_elemento.		
		// tercer_elemento.
		// segundo_elemento.
		// NOSE.
	setTimeout(
				function () {
					tercer_elemento.slideToggle();
					segundo_elemento.slideToggle();
					primer_elemento.slideToggle();
					segundo_elemento.html( contact.menu.Title );
					
					tercer_elemento.html( contact.menu.value );
					segundo_elemento[0].setAttribute('class','last_animate');
					segundo_elemento.removeAttr('id','registro');
				}
			,350)
}
join.on('click', give_me_join);