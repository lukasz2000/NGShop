
angular
.module('ControllersAdmin')
.controller('ProductCreateController',ProductCreateController);

 ProductCreateController.$inject = ['$scope','$http'];

 function ProductCreateController($scope,$http){
	$scope.createProduct = function(){
		// TODO: przesłać dane przez API
		console.log($scope.product);
	};
 };


