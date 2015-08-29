module.exports = angular.module "superheroschool.landing.home", [

]

.controller "HomeCtrl", [
  '$log', '$scope', '$http'
  ($log, $scope, $http) ->
    $log.log('HomeCtrl')

]

.controller "TrainingModesCtrl", [
  '$log', '$scope', '$http'
  ($log, $scope, $http) ->
    $log.log('TrainingModesCtrl')

]

.controller "PunchTrainingCtrl", [
  '$log', '$scope', '$http'
  ($log, $scope, $http) ->
    $log.log('PunchTrainingCtrl')

]