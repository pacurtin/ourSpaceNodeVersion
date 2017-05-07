/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when("/", {templateUrl: "partials/homeBody.html",controller: "HomeBodyCtrl"})
        .when("/pricing", {templateUrl: "partials/pricingBody.html", controller: "HomeBodyCtrl"})
        .when("/services", {templateUrl: "partials/servicesBody.html", controller: "HomeBodyCtrl"})
        .when("/404", {templateUrl: "partials/404.html", controller: "HomeBodyCtrl"})
        .when("/login", {templateUrl: "partials/login.html", controller: "LoginController"})
        .when("/register", {templateUrl: "partials/register.html", controller: "RegisterController"})
        .otherwise({redirectTo: '/404'});
}]);

app.config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('');
}]);
