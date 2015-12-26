mainApp.controller('MainController', ['$rootScope', '$scope', function($rootScope, $scope) {
	$scope.date = new Date();

	$scope.reposition = function(textClass, maxBackgroundWidth) {
		//window width
		var windowWidth = $(window).width();

		//background image dimensions
		var backgroundHeight = $(".background-img").height();
		var backgroundWidth = $(".background-img").width();

		//overlay image dimentions
		var overlayHeight = $(".main-img").height();
		var overlayWidth = $(".main-img").width();

		//navbar dimensions
		var navHeight = $(".nav").height()

		//reposition overlay image over background image
		$(".main-img").css("top", (backgroundHeight / 2) - (overlayHeight / 2) + navHeight);
		$(".main-img").css("left", (windowWidth / 2) - (overlayWidth / 2))

		if (textClass) {
			//text dimensions and repositioning
			var textHeight = $("." + textClass).height();
			var textWidth = $("." + textClass).width();

			$("." + textClass).css("top", (backgroundHeight / 2) - (textHeight / 2) + navHeight + (overlayHeight / 2) + 30);
			$("." + textClass).css("left", (windowWidth / 2) - (textWidth / 2));
		}

		//resize the background image if the window gets too big
		if (windowWidth > maxBackgroundWidth) {
			$(".background-img").css("width", "100%");
		}
		else {
			$(".background-img").css("width", maxBackgroundWidth);
		}
	}
}]);