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
/*    $scope.expense ={};


    var addToExpenseListModal = $modal({
      scope:$scope,
      templateUrl:'views/templates/expensesList-modal.html',
      show:false
    });

    $scope.showModal=function()
    {
      console.log("showModal(controller)");
      addToExpenseListModal.$promise.then(addToExpenseListModal.show);
    };*/

    $scope.addExpense2 = function(expense)
    {
      console.log("addExpense2(controller)");
      outcomeIncomeService.addExpense(expense);
     // addToExpenseListModal.hide();

    }

  });
