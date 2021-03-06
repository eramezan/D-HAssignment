//angular.module('starter.controllers', [])
angular.module('starter.controllers', ['ngOpenFB'])

//.controller('AppCtrl', function ($scope, $ionicModal, $timeout) {
    .controller('AppCtrl', function ($scope, $ionicModal, $timeout, ngFB) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
      // code if using a login system  read_stream,
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
  $scope.fbLogin = function () {
      ngFB.login({ scope: 'email,publish_actions' }).then(
          function (response) {
              if (response.status === 'connected') {
                  console.log('Facebook login succeeded');
                  $scope.closeLogin();
              } else {
                  alert('Facebook login failed');
              }
          });
  };
})

.controller('TodolistsCtrl', function($scope) {
  $scope.todolists = [
    { title: 'Analyze the requirements', id: 1 },
    { title: 'Design the solution', id: 2 },
    { title: 'Develop the solution', id: 3 },
    { title: 'Testing', id: 4 },
    { title: 'Deployment', id: 5 },
    { title: 'Review the whole process', id: 6 }
  ];
})

.controller('TodolistCtrl', function($scope, $stateParams) {
});
