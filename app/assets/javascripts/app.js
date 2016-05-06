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

    .state('public', {
      url: '/public',
      templateUrl: '/templates/home.html',
      ncyBreadcrumb: {
        skip: true
      }
    })

    .state('public.home', {
      url: '^/home',
      views: {
        'header': {
          templateUrl: '/templates/public/layout/header.html'
        },

        'subheader': {
          templateUrl: '/templates/public/layout/subheader.html'
        },

        'main-content': {
          templateUrl: '/templates/public/layout/mainContent.html'
        }
      },
      ncyBreadcrumb: {
        label: 'Home'
      }
    })

  }])

blog.run(['$rootScope',
  function($rootScope) {
    $rootScope.$on('$stateChangeError', console.log.bind(console));
  }]);