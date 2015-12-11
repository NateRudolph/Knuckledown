'use strict';

angular.module('knuckledown')
  .controller('listController', function ($scope, $state, taskService) {

    taskService.subscribe($scope, 'newtask', function(){
      $scope.tasks = taskService.returnTasks();
    });

    $scope.removeTask = function(x){
      taskService.removeTask(x);
    };

  });
