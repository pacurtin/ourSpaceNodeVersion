(function () {
    'use strict';

    angular
        .module('ourSpaceAngularApp')
        .controller('RegisterController', RegisterController);

    RegisterController.$inject = ['UserService', '$location', '$rootScope', 'FlashService', '$scope'];
    function RegisterController(UserService, $location, $rootScope, FlashService, $scope) {
      console.log("Reg Controller reporting for duty.");

      $scope.user = { "firstName":"", "lastName":"", "username":"", "password":"" } ;
      $scope.myTxt = "You have not yet clicked submit";
      $scope.myRegFunc = function () {
          $scope.myTxt = "You clicked submit!";
          $scope.dataLoading = true;
          UserService.Create($scope.user)
              .then(function (response) {
                  if (response.success) {
                      FlashService.Success('Registration successful', true);
                      $location.path('/login');
                  } else {
                      FlashService.Error(response.message);
                      $scope.dataLoading = false;
                  }
              });

}}})();
