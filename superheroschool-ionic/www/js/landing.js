(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = angular.module("superheroschool.landing.home", []).controller("HomeCtrl", [
  '$log', '$scope', '$http', function($log, $scope, $http) {
    return $log.log('HomeCtrl');
  }
]);


},{}],2:[function(require,module,exports){
require('ionic');

require('angular');

require('angular-ui-router');

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


},{"../../www/js/templates":3,"./components/landing/index.coffee":1,"angular":"angular","angular-ui-router":"angular-ui-router","ionic":"ionic"}],3:[function(require,module,exports){
var angular = require('angular');(function(module) {
try { module = angular.module("superheroschool.templates"); }
catch(err) { module = angular.module("superheroschool.templates", []); }
module.run(["$templateCache", function($templateCache) {
  $templateCache.put("landing/templates/home.html",
    "<h1>template</h1>");
}]);
})();

},{"angular":"angular"}]},{},[2])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvY2NyYXZlbnMvZGV2L2lvbmljL2hhY2thdGhvbjUvc3VwZXJoZXJvc2Nob29sLWlvbmljL2FwcC9jb2ZmZWUvY29tcG9uZW50cy9sYW5kaW5nL2luZGV4LmNvZmZlZSIsIi9Vc2Vycy9jY3JhdmVucy9kZXYvaW9uaWMvaGFja2F0aG9uNS9zdXBlcmhlcm9zY2hvb2wtaW9uaWMvYXBwL2NvZmZlZS9sYW5kaW5nLmNvZmZlZSIsInd3dy9qcy90ZW1wbGF0ZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxNQUFNLENBQUMsT0FBUCxHQUFpQixPQUFPLENBQUMsTUFBUixDQUFlLDhCQUFmLEVBQStDLEVBQS9DLENBSWpCLENBQUMsVUFKZ0IsQ0FJTCxVQUpLLEVBSU87RUFDdEIsTUFEc0IsRUFDZCxRQURjLEVBQ0osT0FESSxFQUV0QixTQUFDLElBQUQsRUFBTyxNQUFQLEVBQWUsS0FBZjtXQUNFLElBQUksQ0FBQyxHQUFMLENBQVMsVUFBVDtFQURGLENBRnNCO0NBSlA7Ozs7QUNBakIsT0FBQSxDQUFRLE9BQVI7O0FBQ0EsT0FBQSxDQUFRLFNBQVI7O0FBQ0EsT0FBQSxDQUFRLG1CQUFSOztBQUVBLE9BQUEsQ0FBUSx3QkFBUjs7QUFDQSxPQUFBLENBQVEsbUNBQVI7O0FBRUEsTUFBTSxDQUFDLE9BQVAsR0FBaUIsT0FBTyxDQUFDLE1BQVIsQ0FBZSx5QkFBZixFQUEwQyxDQUN6RCxPQUR5RCxFQUV6RCxXQUZ5RCxFQUd6RCwyQkFIeUQsQ0FBMUMsQ0FNakIsQ0FBQyxHQU5nQixDQU1aO0VBQ0gsTUFERyxFQUNLLGdCQURMLEVBRUgsU0FBQyxJQUFELEVBQU8sY0FBUCxHQUFBLENBRkcsRUFHSCxjQUFjLENBQUMsS0FBZixDQUFxQixTQUFBO0lBR25CLElBQUcsTUFBTSxDQUFDLE9BQVAsSUFBbUIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBN0M7TUFDRSxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyx3QkFBekIsQ0FBa0QsSUFBbEQsRUFERjs7SUFFQSxJQUFHLE1BQU0sQ0FBQyxTQUFWO01BQ0UsU0FBUyxDQUFDLFlBQVYsQ0FBQSxFQURGOztFQUxtQixDQUFyQixDQUhHO0NBTlksQ0FtQmpCLENBQUMsTUFuQmdCLENBbUJUO0VBQ04sZ0JBRE0sRUFDWSxvQkFEWixFQUVOLFNBQUMsY0FBRCxFQUFtQixrQkFBbkI7SUFDRSxjQUFjLENBQUMsS0FBZixDQUFxQixNQUFyQixFQUNFO01BQUEsR0FBQSxFQUFLLEdBQUw7TUFDQSxVQUFBLEVBQVksVUFEWjtNQUVBLFdBQUEsRUFBYSw2QkFGYjtLQURGO1dBTUEsa0JBQWtCLENBQUMsU0FBbkIsQ0FBNkIsR0FBN0I7RUFQRixDQUZNO0NBbkJTOzs7O0FDUGpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlIFwic3VwZXJoZXJvc2Nob29sLmxhbmRpbmcuaG9tZVwiLCBbXG5cbl1cblxuLmNvbnRyb2xsZXIgXCJIb21lQ3RybFwiLCBbXG4gICckbG9nJywgJyRzY29wZScsICckaHR0cCdcbiAgKCRsb2csICRzY29wZSwgJGh0dHApIC0+XG4gICAgJGxvZy5sb2coJ0hvbWVDdHJsJylcblxuXSIsInJlcXVpcmUgJ2lvbmljJ1xucmVxdWlyZSAnYW5ndWxhcidcbnJlcXVpcmUgJ2FuZ3VsYXItdWktcm91dGVyJ1xuXG5yZXF1aXJlICcuLi8uLi93d3cvanMvdGVtcGxhdGVzJ1xucmVxdWlyZSAnLi9jb21wb25lbnRzL2xhbmRpbmcvaW5kZXguY29mZmVlJ1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlICdzdXBlcmhlcm9zY2hvb2wubGFuZGluZycsIFtcbiAgJ2lvbmljJ1xuICAndWkucm91dGVyJ1xuICAnc3VwZXJoZXJvc2Nob29sLnRlbXBsYXRlcydcbl1cblxuLnJ1bihbXG4gICckbG9nJywgJyRpb25pY1BsYXRmb3JtJ1xuICAoJGxvZywgJGlvbmljUGxhdGZvcm0pIC0+XG4gICRpb25pY1BsYXRmb3JtLnJlYWR5IC0+XG4gICAgIyBIaWRlIHRoZSBhY2Nlc3NvcnkgYmFyIGJ5IGRlZmF1bHQgKHJlbW92ZSB0aGlzIHRvIHNob3cgdGhlIGFjY2Vzc29yeSBiYXIgYWJvdmUgdGhlIGtleWJvYXJkXG4gICAgIyBmb3IgZm9ybSBpbnB1dHMpXG4gICAgaWYgd2luZG93LmNvcmRvdmEgYW5kIHdpbmRvdy5jb3Jkb3ZhLnBsdWdpbnMuS2V5Ym9hcmRcbiAgICAgIGNvcmRvdmEucGx1Z2lucy5LZXlib2FyZC5oaWRlS2V5Ym9hcmRBY2Nlc3NvcnlCYXIgdHJ1ZVxuICAgIGlmIHdpbmRvdy5TdGF0dXNCYXJcbiAgICAgIFN0YXR1c0Jhci5zdHlsZURlZmF1bHQoKVxuICAgIHJldHVyblxuXSlcblxuLmNvbmZpZyhbXG4gICckc3RhdGVQcm92aWRlcicsICckdXJsUm91dGVyUHJvdmlkZXInXG4gICgkc3RhdGVQcm92aWRlciwgICAkdXJsUm91dGVyUHJvdmlkZXIpIC0+XG4gICAgJHN0YXRlUHJvdmlkZXIuc3RhdGUoXCJob21lXCIsXG4gICAgICB1cmw6IFwiL1wiXG4gICAgICBjb250cm9sbGVyOiBcIkhvbWVDdHJsXCJcbiAgICAgIHRlbXBsYXRlVXJsOiBcImxhbmRpbmcvdGVtcGxhdGVzL2hvbWUuaHRtbFwiXG4gICAgKVxuXG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSBcIi9cIlxuXSkiLCJ2YXIgYW5ndWxhciA9IHJlcXVpcmUoJ2FuZ3VsYXInKTsoZnVuY3Rpb24obW9kdWxlKSB7XG50cnkgeyBtb2R1bGUgPSBhbmd1bGFyLm1vZHVsZShcInN1cGVyaGVyb3NjaG9vbC50ZW1wbGF0ZXNcIik7IH1cbmNhdGNoKGVycikgeyBtb2R1bGUgPSBhbmd1bGFyLm1vZHVsZShcInN1cGVyaGVyb3NjaG9vbC50ZW1wbGF0ZXNcIiwgW10pOyB9XG5tb2R1bGUucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcImxhbmRpbmcvdGVtcGxhdGVzL2hvbWUuaHRtbFwiLFxuICAgIFwiPGgxPnRlbXBsYXRlPC9oMT5cIik7XG59XSk7XG59KSgpO1xuIl19
