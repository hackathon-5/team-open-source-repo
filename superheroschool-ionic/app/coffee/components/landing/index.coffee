module.exports = angular.module "superheroschool.landing.home", [

]

.controller "HomeCtrl", [
  '$log', '$scope'
  ($log, $scope) ->
    $log.log('HomeCtrl')
    console.log('THIS SHOULD WORK')
]

.controller "TrainingModesCtrl", [
  '$log', '$scope', '$cordovaDeviceMotion'
  ($log, $scope, $cordovaDeviceMotion) ->
    $log.log('TrainingModesCtrl')
    
    $scope.val = JSON.stringify $cordovaDeviceMotion
    
    document.addEventListener 'deviceready', (->

    ), false
]

.controller "PunchTrainingCtrl", [
  '$log', '$scope', '$cordovaDeviceMotion'
  ($log, $scope, $cordovaDeviceMotion) ->
    $log.log('PunchTrainingCtrl')
]