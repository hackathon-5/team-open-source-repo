// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', [
'ionic',
'ui.router',
'ngCordova',
'firebase'
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
      .state('countdown', {
          url: '/countdown',
          controller: 'CountdownCtrl',
          templateUrl: 'tpls/countdown.html'
      })
      .state('punch-training', {
        url: '/punch-training',
        controller: 'PunchTrainingCtrl',
        templateUrl: 'tpls/punch-training.html'
      })
      .state('superhero', {
          url: '/superhero/:score',
          controller: 'SuperHeroCtrl',
          templateUrl: 'tpls/superhero.html'
        })
    ;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise("/");
  })
  .controller('HomeCtrl', function ($scope) {
	  console.log('IN HOMECTRL');
  })
  .controller('TrainingModesCtrl', function ($scope, $firebaseObject) {
	var text = "";
	var possible = "abcdefghijklmnopqrstuvwxyz0123456789";
	for( var i=0; i < 24; i++ ) {
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	}
	$scope.user = $firebaseArray(new Firebase("https://luminous-heat-5410.firebaseio.com/users"));
	$scope.user.id = text;
	$scope.user.$add();

  })
  .controller('CountdownCtrl', function ($scope, $state) {
	  console.log('CountdownCtrl');
	  $scope.val = 5;
	  
	  var timeLeft = 5, cinterval;

	    var timeDec = function (){
	        timeLeft--;
	        $scope.val = timeLeft;
	        $scope.$apply();
	        if(timeLeft === 0){
	        	$state.go('punch-training');
	            clearInterval(cinterval);
	        }
	    };

	    cinterval = setInterval(timeDec, 1000);
  })
  
  
  
  
  
  .controller('PunchTrainingCtrl', function ($scope, $state, $cordovaDeviceMotion) {
	  console.log('PunchTrainingCtrl');

	$scope.val = 'PUNCH';

	  var options = { frequency: 100 };
	  var cnt = 0;
	  var x_prev = 0;
	  var y_prev = 0;
	  var z_prev = 0;
	  var x_delta = 0;
	  var y_delta = 0;
	  var z_delta = 0;
	  var treshold = 250;
	  var num_pow = 0;
	  
	  document.addEventListener("deviceready", function () {
		  var watch = $cordovaDeviceMotion.watchAcceleration(options);
		  watch.then(
	      null,
	      function(error) {
	      // An error occurred
	      },
	      function(result) {
	    	cnt++;
	        x_delta += Math.abs(result.x) - x_prev;
	        y_delta += Math.abs(result.y) - y_prev;
	        z_delta += Math.abs(result.z) - z_prev;
	        x_prev = result.x;
	        y_prev = result.y;
	        z_prev = result.z;
	        if(cnt%10 == 0) {
	        	console.log(x_delta);
	        	console.log(y_delta);
	        	console.log(z_delta);
	        	if((x_delta + y_delta + z_delta) > threshold) {
	        		$scope.val = 'POW!';
	        		num_pow++;
	        		$('#punchVal').text(num_pow);
	        		$('#fill').height(100-(10*num_pow) + '%');
	        	} else {
	        		$scope.val = 'PUNCH';
	        	}
	        	x_delta = 0;
	        	y_delta = 0;
	        	z_delta = 0;
	        }
	    });

	  }, false);
	  

	  var timeLeft = 10, cinterval;
	  

	    var timeDec = function (){
	        timeLeft--;
	        if(timeLeft === 0){
        		$('#punchVal').text('0');
	        	$('#fill').height(100 + '%');
	        	$state.go('superhero', {score:num_pow});
	        }
	    };

	    cinterval = setInterval(timeDec, 1000);
  })
  
  
  .controller('SuperHeroCtrl', function ($scope, $stateParams) {
	  console.log('SuperHeroCtrl');
	  console.log($stateParams.score);
	  $scope.val = $stateParams.score;
  })