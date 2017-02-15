angular
.module('ControllersAdmin')
.controller('ProductEditController',ProductEditController);

 ProductEditController.$inject = ['$scope','$http','$routeParams'];

 function ProductEditController($scope,$http,$routeParams){
	$http.post('model/products.json')
	.success( function(data){
		var products = data;
		$scope.product = products[$routeParams.id];
	}).error( function(){
		console.log('Błąd pobrania pliku json');
	});

	$scope.saveChanges = function (product){
		// TODO: przesłać dane przez API
		console.log(product);
		console.log($routeParams.id);
	};
 };





