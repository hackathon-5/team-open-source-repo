// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', [
'ionic',
'ui.router',
'ngCordova'
])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        controller: 'HomeCtrl',
        templateUrl: 'tpls/home.html'
      })
      .state('training-modes', {
        url: '/training-modes',
        controller: 'TrainingModesCtrl',
        templateUrl: 'tpls/training-modes.html'
      })
      .state('punch-training', {
        url: '/punch-training',
        controller: 'PunchTrainingCtrl',
        templateUrl: 'tpls/punch-training.html'
      })
    ;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise("/");
  })
  .controller('HomeCtrl', function ($scope, $cordovaDeviceMotion) {
	  console.log('IN HOMECTRL');
  })
  .controller('TrainingModesCtrl', function ($scope, $cordovaDeviceMotion) {
	  console.log('TrainingModesCtrl');
  })
  .controller('PunchTrainingCtrl', function ($scope, $cordovaDeviceMotion) {
	  console.log('PunchTrainingCtrl');
	  
	  var options = { frequency: 10 };

	  document.addEventListener("deviceready", function () {

	var watch = $cordovaDeviceMotion.watchAcceleration(options);
	    watch.then(
	      null,
	      function(error) {
	      // An error occurred
	      },
	      function(result) {
	        var X = result.x;
	        var Y = result.y;
	        var Z = result.z;
	        var timeStamp = result.timestamp;
	        $scope.val = X;
	    });

	  }, false);
  })