angular
.module('ControllersSite')
.controller( 'SiteProductsController',SiteProductsController);

 SiteProductsController.$inject = ['$scope','$http','cartSrv'];

  function SiteProductsController($scope,$http,cartSrv) {
	$http.get('model/products.json')
	.success( function( data ){
		$scope.products = data;
	}).error( function(){
		console.log('Błąd pobrania pliku json');
	});
	
	$scope.addToCart = function(product){
		cartSrv.add(product);
	};
  };

	

