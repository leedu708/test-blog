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
      templateUrl: '/templates/public/layout.html',
      ncyBreadcrumb: {
        skip: true
      }
    })

    .state('public.layout', {
      url: '/layout',
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
        skip: true
      }
    })

    .state('public.layout.home', {
      url: '^/home',
      templateUrl: '/templates/public/home.html',
      controller: 'HomeCtrl',
      resolve: {
        posts: ['Restangular', function(Restangular) {
          return Restangular.all('posts').getList();
        }]
      },
      ncyBreadcrumb: {
        label: 'Home'
      }
    })

    .state('public.layout.about', {
      url: '^/about',
      templateUrl: '/templates/public/nav/about.html',
      ncyBreadcrumb: {
        label: 'About'
      }
    })

    .state('public.layout.contact', {
      url: '^/contact',
      templateUrl: '/templates/public/nav/contact.html',
      ncyBreadcrumb: {
        label: 'Contact Me'
      }
    })

  }])

blog.run(['$rootScope',
  function($rootScope) {
    $rootScope.$on('$stateChangeError', console.log.bind(console));
  }]);