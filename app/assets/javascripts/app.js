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

    // public routes
    .state('public', {
      url: '/public',
      templateUrl: '/templates/public/layout.html'
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
      }
    })

    // nav routes
    .state('home', {
      parent: 'public.layout',
      url: '^/home',
      templateUrl: '/templates/public/home.html',
      controller: 'HomeCtrl',
      resolve: {
        posts: ['Restangular', function(Restangular) {
          return Restangular.all('posts').getList();
        }]
      }
    })

    .state('about', {
      parent: 'public.layout',
      url: '^/about',
      templateUrl: '/templates/public/nav/about.html'
    })

    .state('contact', {
      parent: 'public.layout',
      url: '^/contact',
      templateUrl: '/templates/public/nav/contact.html'
    })

    // show post
    .state('showPost', {
      parent: 'public.layout',
      url: '^/posts/:post_id',
      templateUrl: '/templates/public/posts/show.html',
      controller: 'showPostCtrl',
      resolve: {
        post: ['Restangular', '$stateParams', function(Restangular, $stateParams) {
          return Restangular.one('posts', $stateParams['post_id']).get();
        }]
      }
    })

    // admin routes
    .state('admin', {
      url: '/admin',
      templateUrl: '/templates/admin/layout.html'
    })

    .state('admin.dashboard', {
      url: '/dashboard',
      views: {
        'admin-header': {
          templateUrl: '/templates/admin/dashboard/adminHeader.html'
        },

        'sidebar': {
          templateUrl: '/templates/admin/dashboard/sidebar.html'
        },

        'admin-content': {
          templateUrl: '/templates/admin/dashboard/adminContent.html'
        }
      }
    })

    .state('admin.dashboard.overview', {
      url: '/overview',
      templateUrl: '/templates/admin/content/overview.html'
    })

    .state('admin.dashboard.posts', {
      url: '/posts',
      templateUrl: '/templates/admin/content/posts.html'
    })

    .state('admin.dashboard.tags', {
      url: '/tags',
      templateUrl: '/templates/admin/content/tags.html'
    })

  }])

blog.run(['$rootScope',
  function($rootScope) {
    $rootScope.$on('$stateChangeError', console.log.bind(console));
  }]);