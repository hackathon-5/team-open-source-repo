(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = angular.module("superheroschool.landing.home", []).controller("HomeCtrl", [
  '$log', '$scope', '$http', function($log, $scope, $http) {
    return $log.log('HomeCtrl');
  }
]).controller("TrainingModesCtrl", [
  '$log', '$scope', '$http', function($log, $scope, $http) {
    return $log.log('TrainingModesCtrl');
  }
]).controller("PunchTrainingCtrl", [
  '$log', '$scope', '$http', function($log, $scope, $http) {
    return $log.log('PunchTrainingCtrl');
  }
]);


},{}],2:[function(require,module,exports){
require('ionic');

require('jquery');

require('../../www/js/templates');

require('./components/landing/index.coffee');

module.exports = angular.module('superheroschool.landing', ['ionic', 'ui.router', 'superheroschool.templates', 'superheroschool.landing.home']).run([
  '$log', '$ionicPlatform', function($log, $ionicPlatform) {
    return $ionicPlatform.ready(function() {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  }
]).config([
  '$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider.state("home", {
      url: "/",
      controller: "HomeCtrl",
      templateUrl: "landing/templates/home.html"
    }).state("training-modes", {
      url: "/training-modes",
      controller: "TrainingModesCtrl",
      templateUrl: "landing/templates/training_modes.html"
    }).state("punch-training", {
      url: "/punch-training",
      controller: "PunchTrainingCtrl",
      templateUrl: "landing/templates/punch_training.html"
    });
    return $urlRouterProvider.otherwise("/");
  }
]);


},{"../../www/js/templates":3,"./components/landing/index.coffee":1,"ionic":"ionic","jquery":"jquery"}],3:[function(require,module,exports){
require('ionic');(function(module) {
try { module = angular.module("superheroschool.templates"); }
catch(err) { module = angular.module("superheroschool.templates", []); }
module.run(["$templateCache", function($templateCache) {
  $templateCache.put("landing/templates/home.html",
    "<div class=\"row title_row\"><div><h1 class=\"title_pg1 text-center\">SUPERHERO<br/>SCHOOL</h1></div></div><div class=\"row start_row\"><div><div class=\"start_container\"><h2 class=\"start text-center\"><a href=\"#/training-modes\"><span>START <br/>TRAINING</span></a></h2></div></div></div>");
}]);
})();

(function(module) {
try { module = angular.module("superheroschool.templates"); }
catch(err) { module = angular.module("superheroschool.templates", []); }
module.run(["$templateCache", function($templateCache) {
  $templateCache.put("landing/templates/punch_training.html",
    "<div class=\"title_row tr_modes\"><h1 class=\"title_pg2 text-center\">PUNCH!</h1></div><div class=\"container text-center\"><div class=\"back\"><a ui-sref=\"training-modes\">BACK</a></div></div><div class=\"row gauge-row\"><div class=\"col-xs-4\"><ul class=\"hero-list text-center\"><li><img src=\"img/superman.png\"/></li><li><img src=\"img/batman.png\"/></li><li><img src=\"img/lantern.png\"/></li></ul></div><div class=\"col-xs-6\"><div id=\"punch-gauge\"><div id=\"fill\"><p id=\"punchVal\">80</p></div></div></div><div class=\"col-xs-4\"><ul class=\"hero-list text-center\"><li><img src=\"img/hulk.png\"/></li><li><img src=\"img/wolverine.png\"/></li><li><img src=\"img/cap.png\"/></li></ul></div></div><div class=\"testRow text-center row\"><button id=\"test\" class=\"btn btn-lg\">Test</button></div><script type=\"text/javascript\">$(document).ready(function(){\n" +
    "$('#test').click(function(){\n" +
    "| var num = Math.floor(Math.random() * (100 - 0 + 1)) + 0;\n" +
    "$('#punchVal').text(num);\n" +
    "$('#fill').height(100-num + '%');\n" +
    "}); \n" +
    "});</script>");
}]);
})();

(function(module) {
try { module = angular.module("superheroschool.templates"); }
catch(err) { module = angular.module("superheroschool.templates", []); }
module.run(["$templateCache", function($templateCache) {
  $templateCache.put("landing/templates/training_modes.html",
    "<div class=\"title_row tr_modes\"><h1 class=\"title_pg2 text-center\">TRAINING MODES</h1></div><div class=\"container text-center\"><div class=\"back\"><a ui-sref=\"home\">BACK</a></div></div><div class=\"tr-mode-container\"><ul class=\"list-group tr-mode-list\"><li class=\"text-center\"><a href=\"#/punch-training\" class=\"btn punch-btn text-center\">SUPERHERO PUNCH</a></li></ul></div>");
}]);
})();

},{"ionic":"ionic"}]},{},[2])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvcmF5bW9uZC5zbWl0aC9kZXYvaW9uaWMvdGVhbS1vcGVuLXNvdXJjZS1yZXBvL3N1cGVyaGVyb3NjaG9vbC1pb25pYy9hcHAvY29mZmVlL2NvbXBvbmVudHMvbGFuZGluZy9pbmRleC5jb2ZmZWUiLCIvVXNlcnMvcmF5bW9uZC5zbWl0aC9kZXYvaW9uaWMvdGVhbS1vcGVuLXNvdXJjZS1yZXBvL3N1cGVyaGVyb3NjaG9vbC1pb25pYy9hcHAvY29mZmVlL2xhbmRpbmcuY29mZmVlIiwid3d3L2pzL3RlbXBsYXRlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLE1BQU0sQ0FBQyxPQUFQLEdBQWlCLE9BQU8sQ0FBQyxNQUFSLENBQWUsOEJBQWYsRUFBK0MsRUFBL0MsQ0FJakIsQ0FBQyxVQUpnQixDQUlMLFVBSkssRUFJTztFQUN0QixNQURzQixFQUNkLFFBRGMsRUFDSixPQURJLEVBRXRCLFNBQUMsSUFBRCxFQUFPLE1BQVAsRUFBZSxLQUFmO1dBQ0UsSUFBSSxDQUFDLEdBQUwsQ0FBUyxVQUFUO0VBREYsQ0FGc0I7Q0FKUCxDQVdqQixDQUFDLFVBWGdCLENBV0wsbUJBWEssRUFXZ0I7RUFDL0IsTUFEK0IsRUFDdkIsUUFEdUIsRUFDYixPQURhLEVBRS9CLFNBQUMsSUFBRCxFQUFPLE1BQVAsRUFBZSxLQUFmO1dBQ0UsSUFBSSxDQUFDLEdBQUwsQ0FBUyxtQkFBVDtFQURGLENBRitCO0NBWGhCLENBa0JqQixDQUFDLFVBbEJnQixDQWtCTCxtQkFsQkssRUFrQmdCO0VBQy9CLE1BRCtCLEVBQ3ZCLFFBRHVCLEVBQ2IsT0FEYSxFQUUvQixTQUFDLElBQUQsRUFBTyxNQUFQLEVBQWUsS0FBZjtXQUNFLElBQUksQ0FBQyxHQUFMLENBQVMsbUJBQVQ7RUFERixDQUYrQjtDQWxCaEI7Ozs7QUNBakIsT0FBQSxDQUFRLE9BQVI7O0FBQ0EsT0FBQSxDQUFRLFFBQVI7O0FBQ0EsT0FBQSxDQUFRLHdCQUFSOztBQUNBLE9BQUEsQ0FBUSxtQ0FBUjs7QUFFQSxNQUFNLENBQUMsT0FBUCxHQUFpQixPQUFPLENBQUMsTUFBUixDQUFlLHlCQUFmLEVBQTBDLENBQ3pELE9BRHlELEVBRXpELFdBRnlELEVBR3pELDJCQUh5RCxFQUl6RCw4QkFKeUQsQ0FBMUMsQ0FPakIsQ0FBQyxHQVBnQixDQU9aO0VBQ0gsTUFERyxFQUNLLGdCQURMLEVBRUgsU0FBQyxJQUFELEVBQU8sY0FBUDtXQUNFLGNBQWMsQ0FBQyxLQUFmLENBQXFCLFNBQUE7TUFDbkIsSUFBRyxNQUFNLENBQUMsT0FBUCxJQUFtQixNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUE3QztRQUNFLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLHdCQUF6QixDQUFrRCxJQUFsRCxFQURGOztNQUVBLElBQUcsTUFBTSxDQUFDLFNBQVY7UUFDRSxTQUFTLENBQUMsWUFBVixDQUFBLEVBREY7O0lBSG1CLENBQXJCO0VBREYsQ0FGRztDQVBZLENBa0JqQixDQUFDLE1BbEJnQixDQWtCVDtFQUNOLGdCQURNLEVBQ1ksb0JBRFosRUFFTixTQUFDLGNBQUQsRUFBbUIsa0JBQW5CO0lBQ0UsY0FBYyxDQUFDLEtBQWYsQ0FBcUIsTUFBckIsRUFDRTtNQUFBLEdBQUEsRUFBSyxHQUFMO01BQ0EsVUFBQSxFQUFZLFVBRFo7TUFFQSxXQUFBLEVBQWEsNkJBRmI7S0FERixDQUtBLENBQUMsS0FMRCxDQUtPLGdCQUxQLEVBTUU7TUFBQSxHQUFBLEVBQUssaUJBQUw7TUFDQSxVQUFBLEVBQVksbUJBRFo7TUFFQSxXQUFBLEVBQWEsdUNBRmI7S0FORixDQVVBLENBQUMsS0FWRCxDQVVPLGdCQVZQLEVBV0U7TUFBQSxHQUFBLEVBQUssaUJBQUw7TUFDQSxVQUFBLEVBQVksbUJBRFo7TUFFQSxXQUFBLEVBQWEsdUNBRmI7S0FYRjtXQWdCQSxrQkFBa0IsQ0FBQyxTQUFuQixDQUE2QixHQUE3QjtFQWpCRixDQUZNO0NBbEJTOzs7O0FDTGpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlIFwic3VwZXJoZXJvc2Nob29sLmxhbmRpbmcuaG9tZVwiLCBbXG5cbl1cblxuLmNvbnRyb2xsZXIgXCJIb21lQ3RybFwiLCBbXG4gICckbG9nJywgJyRzY29wZScsICckaHR0cCdcbiAgKCRsb2csICRzY29wZSwgJGh0dHApIC0+XG4gICAgJGxvZy5sb2coJ0hvbWVDdHJsJylcblxuXVxuXG4uY29udHJvbGxlciBcIlRyYWluaW5nTW9kZXNDdHJsXCIsIFtcbiAgJyRsb2cnLCAnJHNjb3BlJywgJyRodHRwJ1xuICAoJGxvZywgJHNjb3BlLCAkaHR0cCkgLT5cbiAgICAkbG9nLmxvZygnVHJhaW5pbmdNb2Rlc0N0cmwnKVxuXG5dXG5cbi5jb250cm9sbGVyIFwiUHVuY2hUcmFpbmluZ0N0cmxcIiwgW1xuICAnJGxvZycsICckc2NvcGUnLCAnJGh0dHAnXG4gICgkbG9nLCAkc2NvcGUsICRodHRwKSAtPlxuICAgICRsb2cubG9nKCdQdW5jaFRyYWluaW5nQ3RybCcpXG5cbl0iLCJyZXF1aXJlICdpb25pYydcbnJlcXVpcmUgJ2pxdWVyeSdcbnJlcXVpcmUgJy4uLy4uL3d3dy9qcy90ZW1wbGF0ZXMnXG5yZXF1aXJlICcuL2NvbXBvbmVudHMvbGFuZGluZy9pbmRleC5jb2ZmZWUnXG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUgJ3N1cGVyaGVyb3NjaG9vbC5sYW5kaW5nJywgW1xuICAnaW9uaWMnXG4gICd1aS5yb3V0ZXInXG4gICdzdXBlcmhlcm9zY2hvb2wudGVtcGxhdGVzJ1xuICAnc3VwZXJoZXJvc2Nob29sLmxhbmRpbmcuaG9tZSdcbl1cblxuLnJ1bihbXG4gICckbG9nJywgJyRpb25pY1BsYXRmb3JtJ1xuICAoJGxvZywgJGlvbmljUGxhdGZvcm0pIC0+XG4gICAgJGlvbmljUGxhdGZvcm0ucmVhZHkgLT5cbiAgICAgIGlmIHdpbmRvdy5jb3Jkb3ZhIGFuZCB3aW5kb3cuY29yZG92YS5wbHVnaW5zLktleWJvYXJkXG4gICAgICAgIGNvcmRvdmEucGx1Z2lucy5LZXlib2FyZC5oaWRlS2V5Ym9hcmRBY2Nlc3NvcnlCYXIgdHJ1ZVxuICAgICAgaWYgd2luZG93LlN0YXR1c0JhclxuICAgICAgICBTdGF0dXNCYXIuc3R5bGVEZWZhdWx0KClcbiAgICAgIHJldHVyblxuXSlcblxuLmNvbmZpZyhbXG4gICckc3RhdGVQcm92aWRlcicsICckdXJsUm91dGVyUHJvdmlkZXInXG4gICgkc3RhdGVQcm92aWRlciwgICAkdXJsUm91dGVyUHJvdmlkZXIpIC0+XG4gICAgJHN0YXRlUHJvdmlkZXIuc3RhdGUoXCJob21lXCIsXG4gICAgICB1cmw6IFwiL1wiXG4gICAgICBjb250cm9sbGVyOiBcIkhvbWVDdHJsXCJcbiAgICAgIHRlbXBsYXRlVXJsOiBcImxhbmRpbmcvdGVtcGxhdGVzL2hvbWUuaHRtbFwiXG4gICAgKVxuICAgIC5zdGF0ZShcInRyYWluaW5nLW1vZGVzXCIsXG4gICAgICB1cmw6IFwiL3RyYWluaW5nLW1vZGVzXCJcbiAgICAgIGNvbnRyb2xsZXI6IFwiVHJhaW5pbmdNb2Rlc0N0cmxcIlxuICAgICAgdGVtcGxhdGVVcmw6IFwibGFuZGluZy90ZW1wbGF0ZXMvdHJhaW5pbmdfbW9kZXMuaHRtbFwiXG4gICAgKVxuICAgIC5zdGF0ZShcInB1bmNoLXRyYWluaW5nXCIsXG4gICAgICB1cmw6IFwiL3B1bmNoLXRyYWluaW5nXCJcbiAgICAgIGNvbnRyb2xsZXI6IFwiUHVuY2hUcmFpbmluZ0N0cmxcIlxuICAgICAgdGVtcGxhdGVVcmw6IFwibGFuZGluZy90ZW1wbGF0ZXMvcHVuY2hfdHJhaW5pbmcuaHRtbFwiXG4gICAgKVxuXG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSBcIi9cIlxuXSkiLCJyZXF1aXJlKCdpb25pYycpOyhmdW5jdGlvbihtb2R1bGUpIHtcbnRyeSB7IG1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKFwic3VwZXJoZXJvc2Nob29sLnRlbXBsYXRlc1wiKTsgfVxuY2F0Y2goZXJyKSB7IG1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKFwic3VwZXJoZXJvc2Nob29sLnRlbXBsYXRlc1wiLCBbXSk7IH1cbm1vZHVsZS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibGFuZGluZy90ZW1wbGF0ZXMvaG9tZS5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJyb3cgdGl0bGVfcm93XFxcIj48ZGl2PjxoMSBjbGFzcz1cXFwidGl0bGVfcGcxIHRleHQtY2VudGVyXFxcIj5TVVBFUkhFUk88YnIvPlNDSE9PTDwvaDE+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cXFwicm93IHN0YXJ0X3Jvd1xcXCI+PGRpdj48ZGl2IGNsYXNzPVxcXCJzdGFydF9jb250YWluZXJcXFwiPjxoMiBjbGFzcz1cXFwic3RhcnQgdGV4dC1jZW50ZXJcXFwiPjxhIGhyZWY9XFxcIiMvdHJhaW5pbmctbW9kZXNcXFwiPjxzcGFuPlNUQVJUIDxici8+VFJBSU5JTkc8L3NwYW4+PC9hPjwvaDI+PC9kaXY+PC9kaXY+PC9kaXY+XCIpO1xufV0pO1xufSkoKTtcblxuKGZ1bmN0aW9uKG1vZHVsZSkge1xudHJ5IHsgbW9kdWxlID0gYW5ndWxhci5tb2R1bGUoXCJzdXBlcmhlcm9zY2hvb2wudGVtcGxhdGVzXCIpOyB9XG5jYXRjaChlcnIpIHsgbW9kdWxlID0gYW5ndWxhci5tb2R1bGUoXCJzdXBlcmhlcm9zY2hvb2wudGVtcGxhdGVzXCIsIFtdKTsgfVxubW9kdWxlLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJsYW5kaW5nL3RlbXBsYXRlcy9wdW5jaF90cmFpbmluZy5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJ0aXRsZV9yb3cgdHJfbW9kZXNcXFwiPjxoMSBjbGFzcz1cXFwidGl0bGVfcGcyIHRleHQtY2VudGVyXFxcIj5QVU5DSCE8L2gxPjwvZGl2PjxkaXYgY2xhc3M9XFxcImNvbnRhaW5lciB0ZXh0LWNlbnRlclxcXCI+PGRpdiBjbGFzcz1cXFwiYmFja1xcXCI+PGEgdWktc3JlZj1cXFwidHJhaW5pbmctbW9kZXNcXFwiPkJBQ0s8L2E+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cXFwicm93IGdhdWdlLXJvd1xcXCI+PGRpdiBjbGFzcz1cXFwiY29sLXhzLTRcXFwiPjx1bCBjbGFzcz1cXFwiaGVyby1saXN0IHRleHQtY2VudGVyXFxcIj48bGk+PGltZyBzcmM9XFxcImltZy9zdXBlcm1hbi5wbmdcXFwiLz48L2xpPjxsaT48aW1nIHNyYz1cXFwiaW1nL2JhdG1hbi5wbmdcXFwiLz48L2xpPjxsaT48aW1nIHNyYz1cXFwiaW1nL2xhbnRlcm4ucG5nXFxcIi8+PC9saT48L3VsPjwvZGl2PjxkaXYgY2xhc3M9XFxcImNvbC14cy02XFxcIj48ZGl2IGlkPVxcXCJwdW5jaC1nYXVnZVxcXCI+PGRpdiBpZD1cXFwiZmlsbFxcXCI+PHAgaWQ9XFxcInB1bmNoVmFsXFxcIj44MDwvcD48L2Rpdj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVxcXCJjb2wteHMtNFxcXCI+PHVsIGNsYXNzPVxcXCJoZXJvLWxpc3QgdGV4dC1jZW50ZXJcXFwiPjxsaT48aW1nIHNyYz1cXFwiaW1nL2h1bGsucG5nXFxcIi8+PC9saT48bGk+PGltZyBzcmM9XFxcImltZy93b2x2ZXJpbmUucG5nXFxcIi8+PC9saT48bGk+PGltZyBzcmM9XFxcImltZy9jYXAucG5nXFxcIi8+PC9saT48L3VsPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XFxcInRlc3RSb3cgdGV4dC1jZW50ZXIgcm93XFxcIj48YnV0dG9uIGlkPVxcXCJ0ZXN0XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1sZ1xcXCI+VGVzdDwvYnV0dG9uPjwvZGl2PjxzY3JpcHQgdHlwZT1cXFwidGV4dC9qYXZhc2NyaXB0XFxcIj4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xcblwiICtcbiAgICBcIiQoJyN0ZXN0JykuY2xpY2soZnVuY3Rpb24oKXtcXG5cIiArXG4gICAgXCJ8IHZhciBudW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTAwIC0gMCArIDEpKSArIDA7XFxuXCIgK1xuICAgIFwiJCgnI3B1bmNoVmFsJykudGV4dChudW0pO1xcblwiICtcbiAgICBcIiQoJyNmaWxsJykuaGVpZ2h0KDEwMC1udW0gKyAnJScpO1xcblwiICtcbiAgICBcIn0pOyBcXG5cIiArXG4gICAgXCJ9KTs8L3NjcmlwdD5cIik7XG59XSk7XG59KSgpO1xuXG4oZnVuY3Rpb24obW9kdWxlKSB7XG50cnkgeyBtb2R1bGUgPSBhbmd1bGFyLm1vZHVsZShcInN1cGVyaGVyb3NjaG9vbC50ZW1wbGF0ZXNcIik7IH1cbmNhdGNoKGVycikgeyBtb2R1bGUgPSBhbmd1bGFyLm1vZHVsZShcInN1cGVyaGVyb3NjaG9vbC50ZW1wbGF0ZXNcIiwgW10pOyB9XG5tb2R1bGUucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcImxhbmRpbmcvdGVtcGxhdGVzL3RyYWluaW5nX21vZGVzLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcInRpdGxlX3JvdyB0cl9tb2Rlc1xcXCI+PGgxIGNsYXNzPVxcXCJ0aXRsZV9wZzIgdGV4dC1jZW50ZXJcXFwiPlRSQUlOSU5HIE1PREVTPC9oMT48L2Rpdj48ZGl2IGNsYXNzPVxcXCJjb250YWluZXIgdGV4dC1jZW50ZXJcXFwiPjxkaXYgY2xhc3M9XFxcImJhY2tcXFwiPjxhIHVpLXNyZWY9XFxcImhvbWVcXFwiPkJBQ0s8L2E+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cXFwidHItbW9kZS1jb250YWluZXJcXFwiPjx1bCBjbGFzcz1cXFwibGlzdC1ncm91cCB0ci1tb2RlLWxpc3RcXFwiPjxsaSBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiPjxhIGhyZWY9XFxcIiMvcHVuY2gtdHJhaW5pbmdcXFwiIGNsYXNzPVxcXCJidG4gcHVuY2gtYnRuIHRleHQtY2VudGVyXFxcIj5TVVBFUkhFUk8gUFVOQ0g8L2E+PC9saT48L3VsPjwvZGl2PlwiKTtcbn1dKTtcbn0pKCk7XG4iXX0=
