var app = angular.module("myApp", []);


   app.controller('MyController', function ($scope) {
            //This will hide the DIV by default.
            $scope.IsVisible = false;
            $scope.showVerifactionCode = function () {
                //If DIV is visible it will be hidden and vice versa.
                $scope.IsVisible = $scope.IsVisible ? false : true;
            }

             //This will hide the DIV by default.
            $scope.IsVisibleDependents = false;
            $scope.hiddenDependents = function () {
                //If DIV is visible it will be hidden and vice versa.
                $scope.IsVisible = $scope.IsVisible ? false : true;
            }




            $scope.SignUpProgile = {};
             var validateLicense = function (newVal) {
              // If you are only checking for content to be entered
               return (newVal !== '' && newVal !== undefined);
              };

               $scope.$watch('SignUpProgile.verifyNumber ', function (newVal) {
                   $scope.licenseValidated = validateLicense(newVal);
                  });

        });