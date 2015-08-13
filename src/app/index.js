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
        controller: 'ListCtrl'
      })
      .state('active', {
        url: '/active',
        templateUrl: 'app/_active/active.html',
        controller: 'ActiveCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;
