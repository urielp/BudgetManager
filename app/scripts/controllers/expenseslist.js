'use strict';

/**
 * @ngdoc function
 * @name budgetManagerApp.controller:ExpenseslistCtrl
 * @description
 * # ExpenseslistCtrl
 * Controller of the budgetManagerApp
 */
angular.module('budgetManagerApp')
  .controller('ExpenseslistCtrl', function ($scope,$modal,outcomeIncomeService) {


    $scope.expenselist= outcomeIncomeService.getexpenses();


    $scope.addExpense2 = function(expense)
    {
      console.log("addExpense2(controller)");
      outcomeIncomeService.addExpense(expense);
     // addToExpenseListModal.hide();

    }

  });
