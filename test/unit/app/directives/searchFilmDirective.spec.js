describe('searchFilmDirective', function() {
	var $compile, $scope, film;

	beforeEach(module('filmy', 'templates/searchFilm.html'));
	
	beforeEach(inject(function(_$compile_, _$rootScope_) {
		$compile = _$compile_;
		$scope = _$rootScope_.$new();
		film = $compile('<div search-film></div>')($scope);
		$scope.$apply();
	}));

	it('should render the wmSearchFilm directive', function() {
		expect(film.find('.result').length).toBe(1);
	});
});