filmy.controller('filmyController', ['filmyService', '$scope', function (filmyService, $scope) {

	$scope.searchMovie = function (queryString) {
		queryString = queryString.replace(" ", '%20');
		data = '?t=' + queryString;
		getMovieData(false, data).then(function (res) {
			$scope.film = res;
		});
	};

	$scope.saveMovie = function () {
		data = 'title=' + $scope.film.Title + 
				'&year=' + convertToInt($scope.film.Year) +
				'&rated=' + $scope.film.Rated + 
				'&released=' + $scope.film.Released +
				'&runtime=' + convertToInt($scope.film.Runtime) +
				'&genre=' + convertToArray($scope.film.Genre) +
				'&director=' + $scope.film.Director + 
				'&write=' + convertToArray($scope.film.Writer) +
				'&actors=' + convertToArray($scope.film.Actors) + 
				'&plot=' + $scope.film.Plot +
				'&language=' + convertToArray($scope.film.Language) + 
				'&country=' + $scope.film.Country +
				'&awards=' + $scope.film.Awards + 
				'&poster=' + $scope.film.Poster +
				'&metascore=' + convertToInt($scope.film.Metascore) +
				'&imdbRating=' + parseFloat($scope.film.imdbRating) +
				'&imdbVotes=' + convertToInt($scope.film.imdbVotes) +
				'&imdbID=' + $scope.film.imdbID +
				'&response=' + $scope.film.Response;
		filmyService.saveMovie(data);
	};


	function getMovieData(collection, data) {
		return filmyService.getMovie(collection, data).then(function (res) {
			return res.data;
		});
	}

	$scope.showCollection = function () {
		getCollection(true).then(function (res) {
			$scope.collections = res;
		});
	};

	function getCollection(collection) {
		return filmyService.getMovie(collection).then(function (res) {
			return res.data;
		});
	}

	$scope.deleteFilm = function(film) {
		deleteFilmFromCollection(film._id).then(function (res) {
			$scope.collections = res;
		});
	};

	function deleteFilmFromCollection(id) {
		return filmyService.deleteMovie(id).then(function(res) {
			return res.data;
		});
	}

	/***HELPER FUNCTIONS***/

	function convertToArray (value) { return Array.new = value.split(','); }

	function convertToInt (value) {
		if (value == 'N/A') {
			return 0;
		} else {
			var replaceComma = value.replace(',','');
			return parseInt(replaceComma);
		}
	}

}]);