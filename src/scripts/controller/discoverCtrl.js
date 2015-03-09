filmy.controller('discoverCtrl', ['$scope', 'filmyService', function($scope, filmyService) {
	filmyService.getMovie(true).then(function(res) {
		$scope.nodes = res.data;
	});
}]);