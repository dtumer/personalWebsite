var mainApp = angular.module('mainApp', ['ui.router']);

mainApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/home');

	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'partials/home.html',
			controller: 'HomeController'
		})
		.state('about_deniz', {
			url: '/about_deniz',
			templateUrl: 'partials/about_deniz.html',
			controller: "AboutController"
		})
		.state('about_website', {
			url: '/about_website',
			templateUrl: 'partials/about_website.html',
			controller: 'AboutWebsiteController'
		})
		.state('projects', {
			url: '/projects',
			templateUrl: 'partials/projects.html',
			controller: "ProjectController"
		})
		.state('work', {
			url: '/work_experience',
			templateUrl: 'partials/work.html',
			controller: "WorkController"
		})
		.state('contact', {
			url: '/contact',
			templateUrl: 'partials/contact.html',
			controller: "ContactController"
		});
}]);
