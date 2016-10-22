angular.module('app1', [])
.controller('worldController', ['$scope', function($scope)
	{ //$scope.name= 'world';
	  $scope.greet = function(){ alert("Happy Birthday!")};
    }]);