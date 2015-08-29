module.exports = angular.module "superheroschool.landing.home", [

]

.controller "HomeCtrl", [
  '$log', '$scope', '$http'
  ($log, $scope, $http) ->
    $log.log('HomeCtrl')

]