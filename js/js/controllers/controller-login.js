angular
.module('ControllersSite')
.controller( 'LoginController', LoginController);

	LoginController.$inject = ['$scope','$http'];

	function LoginController($scope, $http) {
	// TODO: pobrać dane z formularza i przesłać do bazy (uwierzytelnianie)
	$scope.input = {};
	$scope.formSubmit = function () {
		$scope.errors = {};
		$scope.errors.login = 'Błędne hasło lub email';
		console.log( $scope.input );
	};
};
