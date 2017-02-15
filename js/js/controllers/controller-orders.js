angular
.module('ControllersAdmin')
.controller( 'OrdersController', OrdersController);

 OrdersController.$inject = ['$scope','$http'];

  function OrdersController($scope,$http) {

	$http.get( 'model/orders.json')
	.success( function( data ){
		$scope.orders = data;
	}).error( function(){
		console.log( 'Błąd pobrania pliku json' );
	});

	$scope.delete = function (user,$index) {
		$scope.orders.splice($index,1);
		// TODO: przesłać dane przez API
	};

	$scope.changeStatus = function (order) {

		if ( order.status == 0 ){
			order.status = 1;
		}

		else {
			order.status = 0;
		}
		// TODO: przesłać dane przez API
	};
};