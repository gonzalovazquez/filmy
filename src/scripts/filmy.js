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
			});
		$urlRouterProvider.otherwise('/');
});