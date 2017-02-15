angular
.module('ControllersAdmin')
.controller( 'ProductsController',ProductsController);

ProductsController.$inject = ['$scope','$http'];

function ProductsController($scope, $http){	

     $http.get('model/products.json')
	.success(function(data){
		$scope.products = data;
	}).error(function(){
		console.log('Błąd pobrania pliku json');
	});

	$scope.delete = function(product,$index){
		if (!confirm('Czy na pewno chcesz usunąć ten produkt?')){
			return false;
		}
		
		$scope.products.splice($index,1);
		// TODO: przesłać dane przez API
    };
	
};

