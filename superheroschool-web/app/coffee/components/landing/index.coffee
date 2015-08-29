module.exports = angular.module "superheroschool.landing.home", [

]

.controller "HomeCtrl", [
  '$log', '$scope', '$http', '$firebaseObject'
  ($log, $scope, $http, $firebaseObject) ->
    $log.log('HomeCtrl')
    ref = Firebase('https://luminous-heat-5410.firebaseio.com/users')
    ref.on('child_added', function(data, prev) {
      console.log data.val()
    });
]