describe('filmLibraryDirective', function() {
	var $compile, $scope, elem;

	beforeEach(module('filmy', 'templates/saveFilm.html'));
	
	beforeEach(inject(function(_$compile_, _$rootScope_) {
		$compile = _$compile_;
		$scope = _$rootScope_.$new();
		elem = $compile('<div save-film></div>')($scope);
		$scope.$apply();
	}));

	it('should render the saveFilm directive', function() {
		console.log(elem);
	});
});