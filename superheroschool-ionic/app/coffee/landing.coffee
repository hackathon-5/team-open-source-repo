require 'ionic'
require 'angular'
require 'angular-ui-router'

require '../../www/js/templates'
require './components/landing/index.coffee'

module.exports = angular.module 'superheroschool.landing', [
  'ionic'
  'ui.router'
  'superheroschool.templates'
]

.run([
  '$log', '$ionicPlatform'
  ($log, $ionicPlatform) ->
  $ionicPlatform.ready ->
    # Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    # for form inputs)
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