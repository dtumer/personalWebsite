mainApp.controller("AboutWebsiteController", ['$scope', function($scope) {
	var textClass = "";
	var maxBackgroundWidth = 2000;

	$scope.$parent.reposition(textClass, maxBackgroundWidth);

	$(window).on("resize.doResize", function() {

		$scope.$parent.reposition(textClass, maxBackgroundWidth);

		$scope.$apply(function() {
			//do nothing. Needed to apply scope
		})
	});

	$scope.$on("$destroy", function() {
		$(window).off("resize.doResize");
	});
}]);