$(function() {

	$('.toggle-menu').click(function() {
		var menu = $(".main-menu ul");
		if(menu.is(":hidden")) {
			menu.show();
		} else {
			menu.hide();
		}
	});

	$(window).resize(function(){

		var wid = $(window).width();

		if(wid > 991 && $('.main-menu ul').is(':hidden')) {
			$('.main-menu ul').removeAttr('style');
		}

	});


	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});