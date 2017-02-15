angular
.module('ControllersAdmin')
.controller('UserEditController',UserEditController);

UserEditController.$inject = ['$scope','$http','$routeParams'];

function UserEditController($scope, $http, $routeParams){
	
	$http.post('model/users.json')
	.success(function(data){
		var users = data;
		$scope.user = users[$routeParams.id];
	}).error(function(){
		console.log('Błąd pobrania pliku json');
	});
	
	$scope.saveChanges = function (user){
			// TODO: przesłać dane przez API
			console.log(user);
			console.log($routeParams.id);
		};
	}
