angular
.module('ControllersSite')
.controller('RegisterController', RegisterController);

 RegisterController.$inject = ['$scope','$http'];
 
 function RegisterController($scope, $http) {
	$scope.formSubmit = function(){
		$scope.errors = {};
		$scope.errors.email = 'Przykładowy błąd';
		$scope.submit = true;
		console.log($scope.input);
	};
 };




