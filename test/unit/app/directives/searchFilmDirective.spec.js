describe('searchFilmDirective', function() {
	var $compile, $scope, elem;

	beforeEach(module('filmy', 'templates/searchFilm.html'));
	
	beforeEach(inject(function(_$compile_, _$rootScope_) {
		$compile = _$compile_;
		$scope = _$rootScope_.$new();
		elem = $compile('<div search-film></div>')($scope);
		$scope.$apply();
	}));

	it('should render the wmSearchFilm directive', function() {
		expect(elem.find('p').text()).toContain('Search');
	});
});