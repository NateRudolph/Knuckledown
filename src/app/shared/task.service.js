'use strict';

angular.module('knuckledown')
  .service('taskService', function ($rootScope) {
    
    var data = {
          tasks: []
        },
        addTask = function (title, time) {
          data.tasks.push({ title: title, time: time });
          this.notify('newtask');
        },
        removeTask = function (x) {
          data.tasks.splice(x,1);
        },
        returnTasks = function () {
          return data.tasks;
        },
        subscribe = function(scope, event, callback) {
            var handler = $rootScope.$on(event, callback);
            scope.$on('$destroy', handler);
        },
        notify = function(event) {
            $rootScope.$emit(event);
        };

        return {
          addTask: addTask,
          removeTask: removeTask,
          returnTasks: returnTasks,
          subscribe: subscribe,
          notify: notify
        };
  });
