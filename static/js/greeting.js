function GreetingController($scope) {
    $scope.name = 'Natthapong';
	$scope.getName = function () {
		return $scope.name;
	};
};