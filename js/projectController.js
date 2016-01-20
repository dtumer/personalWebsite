mainApp.controller('ProjectController', function($scope) {
	$scope.myProjects = [
		{
			"name": "PolyShop",
			"img1": "imgs/projects/polyshop.png",
			"img2": "",
			"description": "PolyShop is the one stop shop for everything food related for Cal Poly Campus Dining at VG's Cafe. This project originally was built in a team as an android application for class, but soon hit mainstream success among Cal Poly freshmen during the years of 2012-2014 gathering hundreds of downloads and helping freshmen plan their meals throughout the day. The application is build using Java and the android SDK and calculates prices of meals depending on the type of day and the options selected. The meal planner allows for 'meal completion' where it would auto-complete your meal using the remaining dollar amount on your meal card to maximize usage.",
			"link": "https://play.google.com/store/apps/details?id=edu.calpoly.polyshop&hl=en"
		},
		{
			"name": "Conway's Game Of Life",
			"img1": "imgs/projects/life_con_analysis.png",
			"img2": "",
			"description": "Conway's Game Of Life is a mathematical population simulator. I became interested in it and decided to make my own Java implementation. This version uses the Observer/Observable software design pattern to split the program into frontend and backend logic. The frontend uses java swing while the backend has been custom made to follow the rules of Conway's Game Of Life. The modularity of the design enables ease of rule changes where variations of the software can be made very easily to see what small changes in population culture can do to the overall population.",
			"link": "https://github.com/dtumer/life_con_analysis"
		},
		{
			"name": "UML Class Diagram Creator",
			"img1": "imgs/projects/uml_creator.png",
			"img2": "",
			"description": "This project was developed as a school project to demonstrate knowledge of Java reflection. This two week project involved creating an extension of Horstmann's Violet UML Program to include reverse creation of a UML Class Diagram utilizing only .class files. The extension uses Java reflection to read .class files that the user provides to create UML Objects for each class and dependencies between classes. The program has not been updated yet to include Aggregation and Association.",
			"link": "https://github.com/dtumer/umlCreator"
		},
		{
			"name": "JSON To <Type> Converter",
			"img1": "imgs/projects/json2type.png",
			"img2": "",
			"description": "This project was a side project I did in a short amount of time. I needed a program that could flatten JSON objects and I had a rough time finding a program online that did exactly what I needed. I ended up implementing this JSON flattening program using Python27 and then created a converter for converting the flattened object to a .CSV format. I modularized the design in case anyone wants to expand the abilities of this project to include other data conversion types.",
			"link": "https://github.com/dtumer/json2type"
		},
		{
			"name": "DJCARS Scheduler Application",
			"img1": "imgs/projects/scheduler.png",
			"img2": "",
			"description": "This project is a project worked on by myself and 5 other students for our CPE 308/309 Software Engineering I/II course. This project was chosen by our teacher because he wanted to see if his students could come up with a more modern solution to the Cal Poly Computer Science Department's scheduling software. Our team implemented a creative JavaFX solution to the scheduling problem by adding instructor and global preferences that would allow for more intricate schedules. Our scheduling software also not only scheduled sections of classes to teachers, but it also scheduled these sections to classrooms on campus for added intricacy. The project earned our team an A in the courses. To see the code for the project please click on this project and navigate to implementation/source to see our Java source files. To download the executable please visit implementation/executables and download the .jar file. Use the credentials 'auser' and 'password' to log into the application to get full functionality.",
			"link": "http://users.csc.calpoly.edu/~dtumer/projects/work/scheduler/"
		},
		{
			"name": "Shared Elements",
			"img1": "imgs/projects/sharedelements.png",
			"img2": "",
			"description": "A startup company in SLO with big ideas. I currently manage their website and EC2 and Rackspace server systems. The website was built using the Scala side of the Java Play Framework with an AngularJS frontend.",
			"link": "http://sharedelements.com"
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
});