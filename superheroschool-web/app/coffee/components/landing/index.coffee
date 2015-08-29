module.exports = angular.module "superheroschool.landing.home", [

]

.controller "HomeCtrl", [
  '$log', '$scope', '$http'
  ($log, $scope, $http) ->
    $log.log('HomeCtrl')
    ref = new Firebase("https://luminous-heat-5410.firebaseio.com")
    
    ref.child('users').on 'child_added', (data, prev) ->
      console.log('USER RECEIVED: ' + data.val())
]