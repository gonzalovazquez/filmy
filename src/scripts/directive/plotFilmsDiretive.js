filmy.directive('plotFilms', ['filmyService', 'd3Service', function(filmyService, d3Service) {
	return {
		restrict: 'EA',
		scope: {
			plotFilms: '=plotFilms'
		},
		link: function(scope, elem) {
			d3Service.d3().then(function(d3) {
				var data = scope.plotFilms,
					body = d3.select(elem[0]),
					svg, circle, circleAttr;

				svg = body.append('svg')
					.attr('width', 800)
					.attr('height', 800);

				circle = svg.selectAll('circle')
						.data(data)
						.enter()
						.append('circle');

				circleAttr = circle.attr('cx', function (d, i) { return (i + 1) * 20; })
							.attr('cy', function (d, i) { return (i + 1) * 20; })
							.attr('r', function (d) { return d.imdbRating; })
							.style('fill', 'purple');
			});
		}
	};
}]);