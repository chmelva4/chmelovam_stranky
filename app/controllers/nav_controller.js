angular.module("chmelovam").controller("navController", function($scope, $mdSidenav) {
  $scope.toggleNav = function() {
    $mdSidenav('left').toggle();
  }
})
