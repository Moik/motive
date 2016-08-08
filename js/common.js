$(function() {

	$('.toggle-menu').click(function() {
		var menu = $(".main-menu ul");
		if(menu.is(":visible")) {
			menu.hide();
		} else {
			menu.show();
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