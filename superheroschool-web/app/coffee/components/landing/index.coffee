module.exports = angular.module "superheroschool.landing.home", [

]

.controller "HomeCtrl", [
  '$log', '$scope', '$http', '$firebaseObject'
  ($log, $scope, $http, $firebaseObject) ->
    $log.log('HomeCtrl')
]