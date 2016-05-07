blog.directive('homePost', function() {
  return {
    restrict: "E",
    templateUrl: '/templates/public/shared/homePost.html',
    scope: {
      post: "="
    }
  }
})