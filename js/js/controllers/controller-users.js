angular
.module('ControllersAdmin')
.controller('UsersController',UserController);

 UserController.$inject = ['$scope','$http'];

 function UserController($scope,$http) {
	$http.get('model/users.json')
	.success(function(data){
		$scope.users = data;
	}).error(function(){
		console.log('Błąd pobrania pliku json');
	});
	
	$scope.delete = function(user,$index){
		$scope.users.splice($index,1);
		// TODO: przesłać dane przez API
	};
 };
