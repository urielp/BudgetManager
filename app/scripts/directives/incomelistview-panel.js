'use strict';

/**
 * @ngdoc directive
 * @name budgetManagerApp.directive:incomelistViewPanel
 * @description
 * # incomelistViewPanel
 */
angular.module('budgetManagerApp')
  .directive('incomelistviewpanel', function ($location,$modal) {
    return {
      templateUrl: 'views/templates/incomeListView.html',
      restrict: 'E',
      controller:'IncomelistCtrl',
      link: function postLink($scope) {
        var addToIncomeListModal = $modal({
          scope:$scope,
          templateUrl:'views/templates/incomelist-modal.html',
          show:false
        });

        $scope.income ={};
        $scope.showModal=function()
        {
          console.log("showModal(directive");
          addToIncomeListModal.$promise.then(addToIncomeListModal.show);
        };

        $scope.addIncome = function()
        {
          console.log("addIncome(directive)");
          $scope.addIncome2($scope.income);
          addToIncomeListModal.hide();
        }
      }
    };
  });
