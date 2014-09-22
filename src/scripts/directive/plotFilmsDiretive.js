filmy.directive('plotFilms', ['filmyService', 'd3Service', function(filmyService, d3Service) {
	return {
		restrict: 'EA',
		link: function(scope, elem) {
			d3Service.d3().then(function(d3) {
				var circle = svg.selectAll("circle")
				    .data([32, 57, 293], function(d) { return d; });

				circle.enter().append("circle")
				    .attr("cy", 60)
				    .attr("cx", function(d, i) { return i * 100 + 30; })
				    .attr("r", function(d) { return Math.sqrt(d); });

				circle.exit().remove();
			});
		},
		template: '<svg width="720" height="120"><circle cx="40" cy="60" r="10"></circle><circle cx="80" cy="60" r="10"></circle><circle cx="120" cy="60" r="10"></circle></svg>'
	};
}]);