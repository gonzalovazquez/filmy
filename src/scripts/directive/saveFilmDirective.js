filmy.directive('saveFilm', ['filmyService', function(filmyService) {
	return {
		restrict: 'EA',
		templateUrl: 'templates/saveFilm.html',
		link: function(scope) {
			var data;

			scope.saveFilm = function () {
				data = 'title=' + scope.$parent.film.Title + 
					'&year=' + convertToInt(scope.$parent.film.Year) +
					'&rated=' + scope.$parent.film.Rated + 
					'&released=' + scope.$parent.film.Released +
					'&runtime=' + convertToInt(scope.$parent.film.Runtime) +
					'&genre=' + convertToArray(scope.$parent.film.Genre) +
					'&director=' + scope.$parent.film.Director + 
					'&write=' + convertToArray(scope.$parent.film.Writer) +
					'&actors=' + convertToArray(scope.$parent.film.Actors) + 
					'&plot=' + scope.$parent.film.Plot +
					'&language=' + convertToArray(scope.$parent.film.Language) + 
					'&country=' + scope.$parent.film.Country +
					'&awards=' + scope.$parent.film.Awards + 
					'&poster=' + scope.$parent.film.Poster +
					'&metascore=' + convertToInt(scope.$parent.film.Metascore) +
					'&imdbRating=' + parseFloat(scope.$parent.film.imdbRating) +
					'&imdbVotes=' + convertToInt(scope.$parent.film.imdbVotes) +
					'&imdbID=' + scope.$parent.film.imdbID +
					'&response=' + scope.$parent.film.Response;

				filmyService.saveMovie(data);
			};

			function convertToInt (value) {
				if (value == 'N/A') {
					return 0;
				} else {
					var replaceComma = value.replace(',','');
					return parseInt(replaceComma);
				}
			}

			function convertToArray (value) { return Array.new = value.split(','); }

		}
	};
}]);