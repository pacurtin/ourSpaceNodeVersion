(function () {
    'use strict';

    angular
        .module('ourSpaceAngularApp')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$location', 'AuthenticationService', 'FlashService', '$scope'];
    function LoginController($location, AuthenticationService, FlashService, $scope) {

        console.log("Login Controller reporting for duty.");

        (function initController() {
            // reset login status
            AuthenticationService.ClearCredentials();
        })();

        $scope.user = { "username":"", "password":"" } ;
        $scope.login = function () {
                   AuthenticationService.Login($scope.user.username, $scope.user.password, function (response) {
                       if (response.success) {
                           AuthenticationService.SetCredentials($scope.user.username, $scope.user.password);
                           $location.path('/');
                       } else {
                           FlashService.Error(response.message);
                       }
                   });
        };
    }

})();
