'use strict';

angular.module('knuckledown')
  .controller('listController', function ($scope, $state, taskService) {
    
    var list = [];

    var self = this;

  	$scope.addTask = function (taskName, taskTime) {
      taskService.addTask(taskName, taskTime);
      $scope.tasks = taskService.returnTasks();
      $scope.taskName = "";
      $scope.taskTime = "";
  	};

  	$scope.deleteTask = function (x) {
  		list.splice(x,1);
  		$scope.list = list;
  	};

  	$scope.goActive = function () {
  		// save list to local storage then...
  		$state.go('active');
  	};
  });
