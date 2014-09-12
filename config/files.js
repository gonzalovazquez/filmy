exports.lib = [
	'bower_components/**'
];

exports.libTest = [
	'bower_components/angularjs/angular.js',
	'bower_components/jquery/dist/jquery.js',
	'bower_components/angular-mocks/angular-mocks.js'
];

var testfiles = [
	'test/unit/**/*.spec.js'
];

exports.main = [
	'src/scripts/filmy.js',
	'src/scripts/**/*.js'
];

exports.styles = [
	'src/styles/*.scss',
	'src/styles/*.css',
	'src/styles/*.sass'
];

exports.views = [
	'src/views/**'
];

exports.templates = [
	'src/templates/*.html'
];

exports.test = exports.libTest.concat(exports.libTest, exports.main, testfiles);