angular
.module('ControllersSite')
.controller('CartController', CartController);

CartController.$inject = ['$scope','$http','$filter','cartSrv'];

function CartController($scope, $http, $filter, cartSrv){
	$scope.cart = cartSrv.show();
	$scope.emptyCart = function(){
		cartSrv.empty();
	};

	$scope.total = function(){
		var total = 0;
		angular.forEach($scope.cart, function(item){
			total += item.qty * item.price;
		});

		total = $filter('number')(total,2);
		return total;
	};

	$scope.removeItem = function($index){
		$scope.cart.splice($index,1);
		cartSrv.update($scope.cart);
	};

	$scope.setOrder = function($event){
		// TODO: sprawdź czy użytkownik jest zalogowany
		var loggedIn = true;
		if (!loggedIn){
			$scope.alert = {type:'warning',msg:'Musisz być zalogowany, żeby złożyć zamówienie.'};
			$event.preventDefault();
			return false;
		}
		// TODO: zapisz zamówienie w bazie
		console.log($scope.total());
		console.log($scope.cart);

		$scope.alert = {type:'success',msg:'Zamówienie złożone. Nie odświeżaj strony. Trwa przekierowywanie do płatności...'};
		cartSrv.empty();

		$event.preventDefault();
		$('#paypalForm').submit();
	};

	$scope.$watch(function(){
		cartSrv.update($scope.cart);
	});
}