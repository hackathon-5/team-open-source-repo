require 'jquery'
require 'jquery-ui'
require 'bootstrap'
require 'angular'
require 'angular-ui-router'
require 'angular-bootstrap'
require 'angular-bootstrap-tpls'

require '../../public/js/templates'
require './components/landing/index.coffee'

module.exports = angular.module 'superheroschool.landing', [
  'ui.router'
  'ui.bootstrap'
  'superheroschool.templates'
  'superheroschool.landing.home'
]

.run([
  '$log'
  ($log) ->
    $log.log('IN HERE')
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