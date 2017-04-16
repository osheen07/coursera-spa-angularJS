(function () {
  'use strict';

angular.module('MsgApp', [])
.controller('MsgAppController', MsgAppController);

MsgAppController.$inject = ['$scope'];

function MsgAppController($scope) {
    $scope.name = "osheen";
    $scope.stateOfBeing = "hungry";
    $scope.printMessage = function () {
      return "Osheen is the best";
    };

    $scope.changeImage = function () {
      $scope.stateOfBeing = "notHungry";
    };
  };

})();
