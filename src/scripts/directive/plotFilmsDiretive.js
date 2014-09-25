filmy.directive('plotFilms', ['filmyService', 'd3Service', function(filmyService, d3Service) {
	return {
		restrict: 'EA',
		scope: {
			plotFilms: '=plotFilms'
		},
		link: function(scope, elem) {
			setTimeout(function() {
				d3Service.d3().then(function(d3) {
				var data = scope.plotFilms,
					body = d3.select(elem[0]),
					labels, svg, node, 
					nodeAttr, gnode;

				svg = body.append('svg')
					.attr('width', 800)
					.attr('height', 800);


				gnode = svg.selectAll('g.gnode')
						.data(data)
						.enter()
						.append('g')
						.classed('gnode', true)
						.attr('transform', function(d, i) {
							return 'translate(' + [ (i + 1) * 80] + ','+ [ (i + 1) * 80] +')'; 
						});


				node = gnode.append('circle')
						.attr('class', 'node');

				nodeAttr = node.attr('cx', function (d, i) { return (i + 1) * 20; })
							.attr('cy', function (d, i) { return (i + 1) * 20; })
							.attr('r', function (d) { return d.imdbRating; })
							.style('fill', 'purple');

				labels = gnode.append('text')
						.attr('x', function (d, i) { return (i + 1.5) * 20; })
						.attr('y', function (d, i) { return (i + 1.5) * 20; })
						.attr('class', 'node-label')
						.attr('fill', 'white')
						.text(function(d) { return d.title; });


				});
			}, 500);
		}
	};
}]);