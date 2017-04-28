/*global jasmine, __karma__, window*/
Error.stackTraceLimit = Infinity;
jasmine.DEFAULT_TIMEOUT_INTERVAL = 3000;

__karma__.loaded = function () {};


function isJsFile(path) {
  return path.slice(-3) == '.js';
}

function isSpecFile(path) {
  return path.slice(-8) == '.spec.js';
}

function isBuiltFile(path) {
  var builtPath = '/base/dist/';
  return isJsFile(path) && (path.substr(0, builtPath.length) == builtPath);
}

var allSpecFiles = Object.keys(window.__karma__.files)
  .filter(isSpecFile)
  .filter(isBuiltFile);


var map = {
  'app': 'base/dist',
  '@angular/core': '/base/node_modules/@angular/core/bundles/core.umd.js',
  '@angular/common': '/base/node_modules/@angular/common/bundles/common.umd.js',
  '@angular/compiler': '/base/node_modules/@angular/compiler/bundles/compiler.umd.js',
  '@angular/platform-browser': '/base/node_modules/@angular/platform-browser/bundles/platform-browser.umd.js',
  '@angular/platform-browser-dynamic': '/base/node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
  '@angular/http': '/base/node_modules/@angular/http/bundles/http.umd.js',

  // angular testing umd bundles
  '@angular/core/testing': '/base/node_modules/@angular/core/bundles/core-testing.umd.js',
  '@angular/common/testing': '/base/node_modules/@angular/common/bundles/common-testing.umd.js',
  '@angular/compiler/testing': '/base/node_modules/@angular/compiler/bundles/compiler-testing.umd.js',
  '@angular/platform-browser/testing': '/base/node_modules/@angular/platform-browser/bundles/platform-browser-testing.umd.js',
  '@angular/platform-browser-dynamic/testing': '/base/node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic-testing.umd.js',
  '@angular/http/testing': '/base/node_modules/@angular/http/bundles/http-testing.umd.js',

  // other libraries
  'rxjs': '/base/node_modules/rxjs',

  'ng2-bs3-modal': '/base/node_modules/ng2-bs3-modal'
};

var packages = {
  'app': {main: 'main.js', defaultExtension: 'js'},
  'rxjs': {defaultExtension: 'js'},
  'ng2-bs3-modal': {main: 'ng2-bs3-modal.js', defaultExtension: 'js'}
};

packages['base/dist'] = {
  defaultExtension: 'js',
  format: 'cjs',
  map: Object.keys(window.__karma__.files).filter(isJsFile).reduce(createPathRecords, {})
};

var config = {
  baseURL: '/base',
  "defaultJSExtensions": true,
  map: map,
  packages: packages
};

// Load our SystemJS configuration.
System.config(config);

function createPathRecords(pathsMapping, appPath) {
  var pathParts = appPath.split('/');
  var pathParts = appPath.split('/');
  var moduleName = '/base/dist/' + pathParts.slice(Math.max(pathParts.length - 2, 1)).join('/');
  moduleName = moduleName.replace(/\.js$/, '');
  pathsMapping["'"+moduleName+"'"] = appPath + '?' + window.__karma__.files[appPath];
  return pathsMapping;
}

Promise.all([
  System.import('@angular/core/testing'),
  System.import('@angular/platform-browser-dynamic/testing')
]).then(function (providers) {
  var testing = providers[0];
  var testingBrowser = providers[1];

  testing.TestBed.initTestEnvironment(testingBrowser.BrowserDynamicTestingModule,
    testingBrowser.platformBrowserDynamicTesting());

}).then(function() {
  // Finally, load all spec files.
  // This will run the tests directly.
  return Promise.all(
    allSpecFiles.map(function (moduleName) {
      return System.import(moduleName);
    }));
}).then(__karma__.start, __karma__.error);