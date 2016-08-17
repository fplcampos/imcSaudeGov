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