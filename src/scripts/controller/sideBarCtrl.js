filmy.controller('sideBarCtrl', function($scope, $location) {
	$scope.isActive = function(route) {
		return route === $location.path();
	};
});