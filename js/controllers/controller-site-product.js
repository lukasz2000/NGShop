angular
.module('ControllersSite')
.controller('SiteProductController',SiteProductController);

 SiteProductController.$inject = ['$scope','$http','$routeParams','cartSrv'];

 function SiteProductController($scope,$http,$routeParams,cartSrv) {
	$http.post('model/products.json')
	.success(function(data){
		var products = data;
		$scope.product = products[$routeParams.id];
	}).error(function(){
		console.log('Błąd pobrania pliku json');
	});
	
	$scope.addToCart = function (product){
		cartSrv.add(product);
	};
 };


