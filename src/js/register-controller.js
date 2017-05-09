(function () {
    'use strict';

    angular
        .module('ourSpaceAngularApp')
        .controller('RegisterController', RegisterController);

    RegisterController.$inject = ['UserService', '$location', '$rootScope', '$scope', 'Flash'];
    function RegisterController(UserService, $location, $rootScope, $scope, Flash) {
      console.log("Reg Controller reporting for duty.");

      $scope.user = { "firstName":"", "lastName":"", "username":"", "password":"" } ;
      $scope.myRegFunc = function () {
          UserService.Create($scope.user)
              .then(function (response) {
                  if (response.success) {
                      $location.path('/login');
                  } else {
                      Flash.create('danger', response.message, 0, {class: 'custom-class', id: 'custom-id'}, true);
                  }
              });

}}})();
