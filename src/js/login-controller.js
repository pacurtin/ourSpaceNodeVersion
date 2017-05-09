(function () {
    'use strict';

    angular
        .module('ourSpaceAngularApp')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$location', 'AuthenticationService', 'Flash', '$scope'];
    function LoginController($location, AuthenticationService, Flash, $scope) {

        console.log("Login Controller reporting for duty.");

        (function initController() {
            // reset login status
            AuthenticationService.ClearCredentials();
        })();

        $scope.loginUser = { "username":"", "password":"" } ;
        $scope.login = function () {
                   AuthenticationService.Login($scope.loginUser.username, $scope.loginUser.password, function (response) {
                       if (response.success) {
                           AuthenticationService.SetCredentials($scope.loginUser.username, $scope.loginUser.password);
                           $location.path('/');
                       } else {
                           Flash.create('danger', response.message, 0, {class: 'custom-class', id: 'custom-id'}, true);
                       }
                   });
        };
    }

})();
