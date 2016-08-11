// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
//angular.module('starter', ['ionic', 'starter.controllers'])
angular.module('starter', ['ionic', 'starter.controllers', 'ngOpenFB'])

.run(function ($ionicPlatform, ngFB) {
    ngFB.init({ appId: '1756486781297548' });
  $ionicPlatform.ready(function() {

    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
     
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.todolists', {
      url: '/todolists',
      views: {
        'menuContent': {
          templateUrl: 'templates/todolists.html',
          controller: 'TodolistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/todolists/:todolistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/todolist.html',
        controller: 'TodolistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/todolists');
});
