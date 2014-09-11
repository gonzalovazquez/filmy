module.exports = function(config) {
  config.set({
    basePath: '../..',
    frameworks: ['jasmine'],
    preprocessors: {'**/*.html': 'ng-html2js'},
    reporters: ['progress'],
    colors: true,
    autoWatch: true,
    //Alernatively you can use 'Chrome'
    browsers: ['PhantomJS'],
    captureTimeout: 6000,
    singleRun: true
  });
};