filmy.directive('searchFilm', function() {
	return {
		restrict: 'EA',
		templateUrl: 'templates/searchFilm.html',
		controller: 'filmyController'
	};
});