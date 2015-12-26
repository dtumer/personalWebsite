mainApp.controller('AboutController', function($scope) {
	$scope.seCourses = [
		{
			"name": "Intro To Computing (Mobile)",
			"isDone": true
		},
		{
			"name": "Fundamentals Of Computer Sci I, II, III",
			"isDone": true
		},
		{
			"name": "Discreet Structures",
			"isDone": true
		},
		{
			"name": "Intro To Computer Organization",
			"isDone": true
		},
		{
			"name": "Professional Responsibilities",
			"isDone": false
		},
		{
			"name": "Individual Software Design & Development",
			"isDone": true
		},
		{
			"name": "Software Engineering I, II",
			"isDone": true
		},
		{
			"name": "Design & Analysis Of Algorithms",
			"isDone": true
		},
		{
			"name": "Systems Programming",
			"isDone": true
		},
		{
			"name": "Software Requirements Engineering",
			"isDone": true
		},
		{
			"name": "Software Construction",
			"isDone": false
		},
		{
			"name": "Software Deployment",
			"isDone": false
		},
		{
			"name": "Programming Languages I",
			"isDone": false
		},
		{
			"name": "User-Centered Interface Design & Development",
			"isDone": false
		},
		{
			"name": "Senior Progect Lab I, II",
			"isDone": false
		}
	];

	$scope.relCourses = [
		{
			"name": "Intro to Database Systems",
			"isDone": true
		},
		{
			"name": "Computer Architecture",
			"isDone": true
		},
		{
			"name": "MongoDB For Database Administrators",
			"isDone": true
		},
		{
			"name": "Calculus I, II, III, IV",
			"isDone": true
		},
		{
			"name": "Linear Analaysis I",
			"isDone": true
		},
		{
			"name": "Combinatorial Math",
			"isDone": true
		},
		{
			"name": "Teamwork Psychology",
			"isDone": true
		},
		{
			"name": "Physics IA, II, III",
			"isDone": true
		}
	];

	var textClass = "";
	var maxBackgroundWidth = 1020;

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
});