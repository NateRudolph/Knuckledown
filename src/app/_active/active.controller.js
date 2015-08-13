'use strict';

angular.module('knuckledown')
  .controller('ActiveCtrl', function ($scope, $timeout, $state) {
  		// get local storage and start running
  		// for now, faking it
  		var list = [{"name":"thing 1", "time":3000},{"name":"thing 2", "time":2000},{"name":"thing 3", "time":5000}],
  			currentIndex = 0;

  		$scope.runTask = function () {
  			console.log("Running Tasks");
			if(currentIndex<list.length){
				$scope.currentTask = list[currentIndex];
				$timeout(function () { 
					console.log("increasing index");
					currentIndex++; 
					$scope.runTask();
				}, list[currentIndex].time);
			} else {
				$state.go("list");
			}
  		};

  		$scope.runTask();


  });
