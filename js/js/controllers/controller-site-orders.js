angular
.module('ControllersSite')
.controller( 'SiteOrdersController', SiteOrderController);

 SiteOrderController.$inject = ['$scope','$http'];

 function SiteOrderController($scope,$http) {
	$http.get('model/orders.json')
	.success(function(data){
		$scope.orders = data;
	}).error(function(){
		console.log('Błąd pobrania pliku json');
	});
 };


