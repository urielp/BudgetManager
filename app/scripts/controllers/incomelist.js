'use strict';

/**
 * @ngdoc function
 * @name budgetManagerApp.controller:IncomelistCtrl
 * @description
 * # IncomelistCtrl
 * Controller of the budgetManagerApp
 */
angular.module('budgetManagerApp')
  .controller('IncomelistCtrl', function ($scope,$modal,outcomeIncomeService) {

    //getting the income list for the cincomelist-view
    $scope.incomes = outcomeIncomeService.getIncomes();


    $scope.addIncome2 = function(income)
    {
      console.log("addIncome2(controller)");
      outcomeIncomeService.addIncome(income);
    }
  });
