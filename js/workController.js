mainApp.controller("WorkController", ['$scope', function($scope) {
	$scope.myWork = [
		{
			"name": "Lawrence Livermore National Laboratory",
			"duration": "Mar 2015 - Sept 2015",
			"job_title": "Software Intern",
			"img": "imgs/llnl.gif",
			"classes": {
				"img": "llnl"
			},
			"description": "I was given a wonderful opportunity to work as an intern for a six month co-op for Livermore Lab's Operations & Business directorate. I worked as a full-stack developer in a four-person development team to design and build an experimental web application for the Labs to helps to make other lab employees jobs easier. The web application was built using the Java Play Framework as a backend REST API with an AngularJS frontend. This web application helped prove to the Labs that this technology stack was more efficient and easier to use than current technologies and the Labs now push this technology on all new web projects. Below is the link to the Livermore Lab's website:",
			"link": "https://www.llnl.gov/",
			"linkName": "Lawrence Livermore National Laboratory website"
		},
		{
			"name": "Bayhill Advisors, Inc.",
			"duration": "Aug 2011 - Present",
			"job_title": "Web Master",
			"img": "imgs/bayhill.jpg",
			"classes": {
				"img": ""
			},
			"description": "This company is a small fincancial planning company based out of Davis, California. I design, build, and manage their past and current websites. The current website was built in 2011 using Xara Web Designer. The current under-development website is being built using the Django Web Framework. Written in Python, Django has a built in CMS that can be built to allow an admin to customize the website without needing programming experience. Below you will find the link to the current website as well as the under-development website for this business:",
			"link": "http://bayhilladvisors.com",
			"linkName": "Bayhill Advisors website",
			"link2": "http://dev.bayhilladvisors.com",
			"link2Name": "Bayhill Advisors dev website"
		}
	];
	
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