filmy.directive('queryInput', ['filmyService', function(filmyService) {
	return {
		restrict: 'EA',
		templateUrl: 'templates/queryInput.html',
		scope: {
			title: '@'
		},
		link: function(scope) {
			var data;

			scope.searchMovie = function () {
				data = '?t=' + scope.title.replace(" ", '%20');
				filmyService.getMovie(false, data).then(function (res) {
					scope.$parent.film = res.data;
				});
			};
		}
	};
}]);