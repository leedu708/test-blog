var blog = angular.module('blog', ['ui.router', 'restangular', 'ngAnimate', 'Devise', 'ncy-angular-breadcrumb'])

.config( ['$stateProvider', '$urlRouterProvider', 'RestangularProvider',
  function($stateProvider, $urlRouterProvider, RestangularProvider) {

    // REST Config
    RestangularProvider.setBaseUrl('/api');
    RestangularProvider.setRequestSuffix('.json');
    RestangularProvider.setDefaultHttpFields({
      'content-type': 'application/json'
    });

    // Routing
    $urlRouterProvider.otherwise('/home');

    $stateProvider

    .state('home', {
      url: '/home',
      templateUrl: '/templates/home.html',
      controller: 'HomeCtrl',
      ncyBreadcrumb: {
        label: 'Home'
      }
    })

  }])

blog.run(['$rootScope',
  function($rootScope) {
    $rootScope.$on('$stateChangeError', console.log.bind(console));
  }]);