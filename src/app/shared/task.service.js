'use strict';

angular.module('knuckledown')
  .service('taskService', function () {
    
    var data = {
          tasks: []
        },
        addTask = function (title, time) {
          data.tasks.push({ title: title, time: time });
        },
        removeTask = function (x) {
          console.log('remove task: ', x);
        },
        returnTasks = function () {
          return data.tasks;
        };

        return {
          addTask: addTask,
          removeTask: removeTask,
          returnTasks: returnTasks
        };
  });
