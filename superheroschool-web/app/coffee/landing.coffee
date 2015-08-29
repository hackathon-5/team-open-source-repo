require 'angular'
require 'angular-ui-router'
require 'angular-bootstrap'
require 'angular-bootstrap-tpls'
require 'jquery'
require 'bootstrap'
require 'jquery-ui'

require '../../public/js/templates'
require './components/landing/index.coffee'

module.exports = angular.module 'superheroschool.landing', [
  'ui.router'
  'ui.bootstrap'
  'superheroschool.templates'
]

.run([
  '$log'
  ($log) ->
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