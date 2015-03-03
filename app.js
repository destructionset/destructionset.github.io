angular.module('DestructionApp', [])

.controller('DestructionController', ['$scope', function($scope) {
	$scope.submit = function() {
		if ($scope.command.substring(0,4) == "load") {
			$scope.response = 'PRESS PLAY ON TAPE';
		} else {
		$scope.response = '?SYNTAX ERROR';
		}
		$scope.command = '';
	}
}]);
