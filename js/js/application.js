angular
.module('app', ['ngRoute','angular-storage','ControllersNavigation','ControllersAdmin','ControllersSite','myServices'])
.config( ['$routeProvider','$httpProvider', function($routeProvider, $httpProvider){


	// ================== Admin Products ====================

	$routeProvider.when('/admin/products', {
		controller: 'ProductsController',
		templateUrl: 'partials/admin/products.html'
	});

	$routeProvider.when('/admin/product/edit/:id', {
		controller: 'ProductEditController',
		templateUrl: 'partials/admin/product-edit.html'
	});

	$routeProvider.when('/admin/product/create', {
		controller: 'ProductCreateController',
		templateUrl: 'partials/admin/product-create.html'
	});

	// ================== Admin Users ====================

	$routeProvider.when('/admin/users', {
		controller: 'UsersController',
		templateUrl: 'partials/admin/users.html'
	});

	$routeProvider.when('/admin/user/edit/:id', {
		controller: 'UserEditController',
		templateUrl: 'partials/admin/user-edit.html'
	});

	$routeProvider.when('/admin/user/create', {
		controller: 'UserCreateController',
		templateUrl: 'partials/admin/user-create.html'
	});

	// ================== Admin Orders ====================

	$routeProvider.when('/admin/orders', {
		controller: 'OrdersController',
		templateUrl: 'partials/admin/orders.html'
	});

	// ================== Site Products ====================

	$routeProvider.when('/products', {
		controller: 'SiteProductsController',
		templateUrl: 'partials/site/products.html'
	});

	$routeProvider.when('/product/:id', {
		controller: 'SiteProductController',
		templateUrl: 'partials/site/product.html'
	});

	$routeProvider.when('/cart', {
		controller: 'CartController',
		templateUrl: 'partials/site/cart.html'
	});

	$routeProvider.when('/orders', {
		controller : 'SiteOrdersController',
		templateUrl : 'partials/site/orders.html'
	});

	// ================ Login & Register ==================

	$routeProvider.when('/login', {
		controller: 'LoginController',
		templateUrl: 'partials/site/login.html'
	});

	$routeProvider.when('/register', {
		controller: 'RegisterController',
		templateUrl: 'partials/site/register.html'
	});

	// ================== Default ====================

	$routeProvider.otherwise({
		redirectTo: '/products'
	});
}]);


