function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}

$("#topo").click(function() {
   scrollToAnchor('topo');
});

$(".navbar-toggle").click(function() {
	$(".navbar").slideToggle( "blind" );
});

jQuery( window ).scroll(function() {
		
	var st = jQuery(this).scrollTop(); // captura a posição do scroll
	var formIMC = $(".formula-imc");

	console.log(st);

	if (st >= 450){
		formIMC.delay().animate({'opacity': 1}, 1000);
	};

});