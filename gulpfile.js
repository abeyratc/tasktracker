const browsersync = require('browser-sync');
const del = require('del');
const gulp = require('gulp');
const Server = require('karma').Server;
const sourcemaps = require('gulp-sourcemaps');
const tscconfig = require('./tsconfig.json');
const tslint = require('gulp-tslint');
const typescript = require('gulp-typescript');

const express = require('express');
const proxy = require('http-proxy-middleware');

// https://github.com/chimurai/http-proxy-middleware/blob/master/README.md#context-matching
//let app = express();
//app.use(proxy('/api', {target: 'http://localhost:9080', changeOrigin: true}));
//app.listen(3000);


// clean the contents of the distribution directory
gulp.task('clean', () => {
  return del('dist/**/*');
});

//TypeScript compile
gulp.task('compile', ['clean'], () => {
  return gulp
    .src('app/**/*.ts')
    .pipe(sourcemaps.init())          // <--- sourcemaps
    .pipe(typescript(tscconfig.compilerOptions))
    .pipe(sourcemaps.write('.',{sourceRoot: "."}))      // <--- sourcemaps
    .pipe(gulp.dest(tscconfig.compilerOptions.outDir));
});

// copy dependencies
gulp.task('copy:libs', ['clean'], () => {
	return gulp.src([
    'node_modules/core-js/client/shim.min.js',
    'node_modules/zone.js/dist/zone.js',
    'node_modules/reflect-metadata/Reflect.js',
    'node_modules/systemjs/dist/system.src.js',
    'node_modules/bootstrap/dist/js/bootstrap.min.js',
    'node_modules/ng2-bs3-modal/bundles/ng2-bs3-modal.js'
	])
	.pipe(gulp.dest('dist/lib'))
});

// copy static assets - i.e. non TypeScript compiled source
gulp.task('copy:assets', ['clean'], () => {
  return gulp.src(['app/**/*', , 'index.html', 'styles.css', '!app/**/*.ts'])
    .pipe(gulp.dest('dist'))
});

gulp.task('tslint', () => {
  return gulp.src('app/**/*.ts')
    .pipe(tslint())
    .pipe(tslint({
	    formatter: "verbose"
	}))
	.pipe(tslint.report());
});

// browser sync
gulp.task('browser-sync', ['watch'], () => {
	let routes = {
		'/fonts' : 'node_modules/bootstrap/assets/fonts/bootstrap'
	};

	browsersync.init({
		server: {
			baseDir: ['./'],
			routes: routes,
      middleware: [proxy('/api', {target: 'http://localhost:9080', changeOrigin: true, logLevel: 'debug'})]
		},
		ghostMode: false
	});

	gulp.watch('index.html').on('change', browsersync.reload);
});

gulp.task('watch', () => {
    gulp.watch(["app/**/*.ts"], ['build']).on('change', (e) => {
        console.log('TypeScript file ' + e.path + ' has been changed. Compiling.');
    });
    //gulp.watch(["app/**/*.html", "app/**/*.css"], ['build']).on('change', (e) => {
     //     console.log('Resource file ' + e.path + ' has been changed. Updating.');
    //});
});

gulp.task('test', function (done) {
    new Server({
      configFile: __dirname + '/karma.conf.js',
      singleRun: true,
      autoWatch: false,
    }, done()).start();
});

gulp.task('test:tdd', function (done) {
    new Server({
      configFile: __dirname + '/karma.conf.js',
      singleRun: false,
      autoWatch: true,
    }, done()).start();
});
 
gulp.task('build', ['compile', 'copy:libs', 'copy:assets']);
gulp.task('serve', ['build', 'browser-sync', 'watch']);
gulp.task('default', ['build']);
