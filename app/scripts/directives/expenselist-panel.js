'use strict';

/**
 * @ngdoc directive
 * @name budgetManagerApp.directive:ExpenseListPanel
 * @description
 * # ExpenseListPanel
 */
angular.module('budgetManagerApp')
  .directive('expenseListPanel', function ($location, $modal,outcomeIncomeService) {
    return {
      templateUrl: 'views/templates/expenseList-Panel',
      restrict: 'E',
      scope:{},
      link: function ($scope) {
        $scope.expenselist ={};

        var addToExpenseListModal = $modal({
          scope:$scope,
          template:'views/templates/expensesList-modal.html',
          show:false
        });
        $scope.expenselist= outcomeIncomeService.getexpenses();


        $scope.showModal=function()
        {
          //addToExpenseListModal.$promise.then(addToExpenseListModal.show);
          $location.path( '/expenseslist.html' );
        }
      }
    };
  });
