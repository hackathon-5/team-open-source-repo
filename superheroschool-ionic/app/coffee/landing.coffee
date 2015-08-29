require 'ionic'
require 'ngCordova'

require '../../www/js/templates'
require './components/landing/index.coffee'

module.exports = angular.module 'superheroschool.landing', [
  'ionic'
  'ngCordova'
  'ui.router'
  'superheroschool.templates'
  'superheroschool.landing.home'
]

.run([
  '$log', '$ionicPlatform'
  ($log, $ionicPlatform) ->
    $ionicPlatform.ready ->
      if window.cordova and window.cordova.plugins.Keyboard
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar true
      if window.StatusBar
        StatusBar.styleDefault()
      return
])

.config([
  '$stateProvider', '$urlRouterProvider'
  ($stateProvider,   $urlRouterProvider) ->
    $stateProvider.state("home",
      url: "/"
      controller: "HomeCtrl"
      templateUrl: "landing/templates/home.html"
    )
    .state("training-modes",
      url: "/training-modes"
      controller: "TrainingModesCtrl"
      templateUrl: "landing/templates/training_modes.html"
    )
    .state("punch-training",
      url: "/punch-training"
      controller: "PunchTrainingCtrl"
      templateUrl: "landing/templates/punch_training.html"
    )

    $urlRouterProvider.otherwise "/"
])