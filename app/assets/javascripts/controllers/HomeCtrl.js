blog.controller('HomeCtrl',
  ['$scope',
  function($scope) {

    $scope.init = function() {
      $scope.test = 'Hello, World!';
    };

    $scope.init();

  }]);