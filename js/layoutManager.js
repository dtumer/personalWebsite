$(document).ready(function() {
	reposition();

	$(window).resize(function() {
		reposition();
	});

	function reposition() {
		//window width for centering the overlaid image
		var windowWidth = $(window).width();

		//measurements of background image
		var backgroundHeight = $(".background-img").height();

		// //measurements of background image
		// var backgroundHeight = $('.' + backgroundClass).height();
		// var imageWidth = $("." + overlayClass).width();
		// var imageHeight = $("." + overlayClass).height();
		// var navHeight = $(".nav").height();

		// console.log($(".main-img").width());
		// $("." + overlayClass).css("left", (windowWidth / 2) - (imageWidth / 2));
		// $("." + overlayClass).css("top", (backgroundHeight / 2) - (imageHeight / 2) - 22 + navHeight);
		
		// //had to manually put the width in so that it could recognize the size of the window
		// if (windowWidth > 1000) {

		// 	$("." + backgroundClass).css("width", "100%");
		// }
		// else {
		// 	$("." + backgroundClass).css("width", "1000px");
		// }
	}
});