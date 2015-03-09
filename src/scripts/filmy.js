var filmy = angular.module('filmy', ['ui.router'])
	.config(function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'views/home.html'
			})
			.state('library', {
				url: '/library',
				templateUrl: 'views/library.html'
			})
			.state('discover', {
				url: '/discover',
				templateUrl: 'views/discover.html'
			});
		$urlRouterProvider.otherwise('/');
});