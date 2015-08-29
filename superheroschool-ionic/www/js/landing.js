(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = angular.module("superheroschool.landing.home", []).controller("HomeCtrl", [
  '$log', '$scope', '$http', function($log, $scope, $http) {
    return $log.log('HomeCtrl');
  }
]);


},{}],2:[function(require,module,exports){
require('ionic');

require('../../www/js/templates');

require('./components/landing/index.coffee');

module.exports = angular.module('superheroschool.landing', ['ionic', 'ui.router', 'superheroschool.templates']).run([
  '$log', '$ionicPlatform', function($log, $ionicPlatform) {}, $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  })
]).config([
  '$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider.state("home", {
      url: "/",
      controller: "HomeCtrl",
      templateUrl: "landing/templates/home.html"
    });
    return $urlRouterProvider.otherwise("/");
  }
]);


},{"../../www/js/templates":3,"./components/landing/index.coffee":1,"ionic":"ionic"}],3:[function(require,module,exports){
require('ionic');(function(module) {
try { module = angular.module("superheroschool.templates"); }
catch(err) { module = angular.module("superheroschool.templates", []); }
module.run(["$templateCache", function($templateCache) {
  $templateCache.put("landing/templates/home.html",
    "<h1>template</h1>");
}]);
})();

},{"ionic":"ionic"}]},{},[2])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvY2NyYXZlbnMvZGV2L2lvbmljL2hhY2thdGhvbjUvc3VwZXJoZXJvc2Nob29sLWlvbmljL2FwcC9jb2ZmZWUvY29tcG9uZW50cy9sYW5kaW5nL2luZGV4LmNvZmZlZSIsIi9Vc2Vycy9jY3JhdmVucy9kZXYvaW9uaWMvaGFja2F0aG9uNS9zdXBlcmhlcm9zY2hvb2wtaW9uaWMvYXBwL2NvZmZlZS9sYW5kaW5nLmNvZmZlZSIsInd3dy9qcy90ZW1wbGF0ZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxNQUFNLENBQUMsT0FBUCxHQUFpQixPQUFPLENBQUMsTUFBUixDQUFlLDhCQUFmLEVBQStDLEVBQS9DLENBSWpCLENBQUMsVUFKZ0IsQ0FJTCxVQUpLLEVBSU87RUFDdEIsTUFEc0IsRUFDZCxRQURjLEVBQ0osT0FESSxFQUV0QixTQUFDLElBQUQsRUFBTyxNQUFQLEVBQWUsS0FBZjtXQUNFLElBQUksQ0FBQyxHQUFMLENBQVMsVUFBVDtFQURGLENBRnNCO0NBSlA7Ozs7QUNBakIsT0FBQSxDQUFRLE9BQVI7O0FBRUEsT0FBQSxDQUFRLHdCQUFSOztBQUNBLE9BQUEsQ0FBUSxtQ0FBUjs7QUFFQSxNQUFNLENBQUMsT0FBUCxHQUFpQixPQUFPLENBQUMsTUFBUixDQUFlLHlCQUFmLEVBQTBDLENBQ3pELE9BRHlELEVBRXpELFdBRnlELEVBR3pELDJCQUh5RCxDQUExQyxDQU1qQixDQUFDLEdBTmdCLENBTVo7RUFDSCxNQURHLEVBQ0ssZ0JBREwsRUFFSCxTQUFDLElBQUQsRUFBTyxjQUFQLEdBQUEsQ0FGRyxFQUdILGNBQWMsQ0FBQyxLQUFmLENBQXFCLFNBQUE7SUFHbkIsSUFBRyxNQUFNLENBQUMsT0FBUCxJQUFtQixNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUE3QztNQUNFLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLHdCQUF6QixDQUFrRCxJQUFsRCxFQURGOztJQUVBLElBQUcsTUFBTSxDQUFDLFNBQVY7TUFDRSxTQUFTLENBQUMsWUFBVixDQUFBLEVBREY7O0VBTG1CLENBQXJCLENBSEc7Q0FOWSxDQW1CakIsQ0FBQyxNQW5CZ0IsQ0FtQlQ7RUFDTixnQkFETSxFQUNZLG9CQURaLEVBRU4sU0FBQyxjQUFELEVBQW1CLGtCQUFuQjtJQUNFLGNBQWMsQ0FBQyxLQUFmLENBQXFCLE1BQXJCLEVBQ0U7TUFBQSxHQUFBLEVBQUssR0FBTDtNQUNBLFVBQUEsRUFBWSxVQURaO01BRUEsV0FBQSxFQUFhLDZCQUZiO0tBREY7V0FNQSxrQkFBa0IsQ0FBQyxTQUFuQixDQUE2QixHQUE3QjtFQVBGLENBRk07Q0FuQlM7Ozs7QUNMakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUgXCJzdXBlcmhlcm9zY2hvb2wubGFuZGluZy5ob21lXCIsIFtcblxuXVxuXG4uY29udHJvbGxlciBcIkhvbWVDdHJsXCIsIFtcbiAgJyRsb2cnLCAnJHNjb3BlJywgJyRodHRwJ1xuICAoJGxvZywgJHNjb3BlLCAkaHR0cCkgLT5cbiAgICAkbG9nLmxvZygnSG9tZUN0cmwnKVxuXG5dIiwicmVxdWlyZSAnaW9uaWMnXG5cbnJlcXVpcmUgJy4uLy4uL3d3dy9qcy90ZW1wbGF0ZXMnXG5yZXF1aXJlICcuL2NvbXBvbmVudHMvbGFuZGluZy9pbmRleC5jb2ZmZWUnXG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUgJ3N1cGVyaGVyb3NjaG9vbC5sYW5kaW5nJywgW1xuICAnaW9uaWMnXG4gICd1aS5yb3V0ZXInXG4gICdzdXBlcmhlcm9zY2hvb2wudGVtcGxhdGVzJ1xuXVxuXG4ucnVuKFtcbiAgJyRsb2cnLCAnJGlvbmljUGxhdGZvcm0nXG4gICgkbG9nLCAkaW9uaWNQbGF0Zm9ybSkgLT5cbiAgJGlvbmljUGxhdGZvcm0ucmVhZHkgLT5cbiAgICAjIEhpZGUgdGhlIGFjY2Vzc29yeSBiYXIgYnkgZGVmYXVsdCAocmVtb3ZlIHRoaXMgdG8gc2hvdyB0aGUgYWNjZXNzb3J5IGJhciBhYm92ZSB0aGUga2V5Ym9hcmRcbiAgICAjIGZvciBmb3JtIGlucHV0cylcbiAgICBpZiB3aW5kb3cuY29yZG92YSBhbmQgd2luZG93LmNvcmRvdmEucGx1Z2lucy5LZXlib2FyZFxuICAgICAgY29yZG92YS5wbHVnaW5zLktleWJvYXJkLmhpZGVLZXlib2FyZEFjY2Vzc29yeUJhciB0cnVlXG4gICAgaWYgd2luZG93LlN0YXR1c0JhclxuICAgICAgU3RhdHVzQmFyLnN0eWxlRGVmYXVsdCgpXG4gICAgcmV0dXJuXG5dKVxuXG4uY29uZmlnKFtcbiAgJyRzdGF0ZVByb3ZpZGVyJywgJyR1cmxSb3V0ZXJQcm92aWRlcidcbiAgKCRzdGF0ZVByb3ZpZGVyLCAgICR1cmxSb3V0ZXJQcm92aWRlcikgLT5cbiAgICAkc3RhdGVQcm92aWRlci5zdGF0ZShcImhvbWVcIixcbiAgICAgIHVybDogXCIvXCJcbiAgICAgIGNvbnRyb2xsZXI6IFwiSG9tZUN0cmxcIlxuICAgICAgdGVtcGxhdGVVcmw6IFwibGFuZGluZy90ZW1wbGF0ZXMvaG9tZS5odG1sXCJcbiAgICApXG5cbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlIFwiL1wiXG5dKSIsInJlcXVpcmUoJ2lvbmljJyk7KGZ1bmN0aW9uKG1vZHVsZSkge1xudHJ5IHsgbW9kdWxlID0gYW5ndWxhci5tb2R1bGUoXCJzdXBlcmhlcm9zY2hvb2wudGVtcGxhdGVzXCIpOyB9XG5jYXRjaChlcnIpIHsgbW9kdWxlID0gYW5ndWxhci5tb2R1bGUoXCJzdXBlcmhlcm9zY2hvb2wudGVtcGxhdGVzXCIsIFtdKTsgfVxubW9kdWxlLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJsYW5kaW5nL3RlbXBsYXRlcy9ob21lLmh0bWxcIixcbiAgICBcIjxoMT50ZW1wbGF0ZTwvaDE+XCIpO1xufV0pO1xufSkoKTtcbiJdfQ==
