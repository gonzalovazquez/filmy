filmy.directive('filmLibrary', ['filmyService', function(filmyService) {
	return {
		restrict: 'EA',
		templateUrl: 'templates/filmLibrary.html',
		scope: {
			films : '@'
		},
		link: function(scope) {
			filmyService.getMovie(true).then(function(res) {
					scope.films = res.data;
			});

			scope.deleteFilm = function(id) {
				filmyService.deleteMovie(id).then(function(res){
					scope.films = res.data;
				});
			};


		}
	};
}]);