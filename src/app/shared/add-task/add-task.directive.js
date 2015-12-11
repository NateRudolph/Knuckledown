'use strict';

angular.module('knuckledown')
  .directive('addTask', function (taskService) {
    return {
  		restrict: 'E',
  		templateUrl: 'app/shared/add-task/add-task.html',
    	link: function($scope) {
    		$scope.addTask = function(name, time) {
    			taskService.addTask(name, time);
    		};
    	}
    };
  });
