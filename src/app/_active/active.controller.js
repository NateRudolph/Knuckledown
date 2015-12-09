'use strict';

angular.module('knuckledown')
  .controller('activeController', function ($scope, taskService) {

  	var self = this;

  	self.tasks = taskService.returnTasks();

  });
