blog.controller('showPostCtrl',
  ['$scope', 'post',
  function($scope, post) {

    $scope.init = function() {
      $scope.post = post;
    };

    $scope.init();

  }])