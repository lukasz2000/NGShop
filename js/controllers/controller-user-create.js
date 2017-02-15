angular
.module('ControllersAdmin')
.controller( 'UserCreateController' , [ '$scope' , '$http' , function( $scope , $http ){

	$scope.createUser = function () {

		// TODO: przesłać dane przez API

		console.log( $scope.user );
	};

}]);