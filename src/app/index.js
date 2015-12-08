'use strict';

angular.module('knuckledown', [
	'ngAnimate',
	'ngCookies',
	'ngTouch', 
	'ngSanitize', 
	'restangular', 
	'ui.router'
	])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('list', {
        url: '/',
        templateUrl: 'app/_list/list.html',
        controller: 'listController',
        controllerAs: 'listCtrl'
      })
      .state('active', {
        url: '/active',
        templateUrl: 'app/_active/active.html',
        controller: 'activeController',
        controllerAs: 'activeCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;
