/**
 * Main AngularJS Web Application
 */
var app = angular.module('ourSpaceAngularApp', [
    'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when("/", {templateUrl: "partials/homeBody.html",controller: "PageCtrl"})
        .when("/pricing", {templateUrl: "partials/pricingBody.html", controller: "PageCtrl"})
        .when("/services", {templateUrl: "partials/servicesBody.html", controller: "PageCtrl"})
        .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);

app.config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('');
}]);

/**
 * Controls Pages
 */
app.controller('PageCtrl', function ( $scope /*, $location, $http */) {
    console.log("Page Controller reporting for duty.");


});
