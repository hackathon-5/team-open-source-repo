require 'ionic'

require '../../www/js/templates'
require './components/landing/index.coffee'

module.exports = angular.module 'superheroschool.landing', [
  'ionic'
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

    $urlRouterProvider.otherwise "/"
])