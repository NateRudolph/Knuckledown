'use strict';

angular.module('knuckledown')
  .controller('ListCtrl', function ($scope, $state) {
    
    var list = [];

  	$scope.addTask = function (taskName, taskTime) {
  		list.push({ name: taskName, time: taskTime });
  		$scope.list = list;
  	};

  	$scope.deleteTask = function (x) {
  		list.splice(x,1);
  		$scope.list = list;
  	};

  	$scope.goActive = function () {
  		// save list to local storage then...
  		$state.go("active");
  	};


  });
