/**
 * Main AngularJS Web Application
 */
var app = angular.module('ourSpaceAngularApp', ['ngRoute', 'ngCookies', 'ngFlash']).run(run);

/**
 * Authentication stuff
 */
run.$inject = ['$rootScope', '$location', '$cookies', '$http'];
    function run($rootScope, $location, $cookies, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookies.getObject('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;
        }

        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in and trying to access a restricted page
            var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                $location.path('/login');
            }
        });
    }

/**
 * Flash message config
 */
//TODO Fix this after studying JS
//app.config((FlashProvider) => {
//    FlashProvider.setTimeout(2000);
//    FlashProvider.setShowClose(true);
//});
