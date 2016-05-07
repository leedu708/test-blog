blog.controller('HomeCtrl',
  ['$scope', 'posts',
  function($scope, posts) {

    $scope.init = function() {
      $scope.posts = posts;
    };

    $scope.init();

  }]);