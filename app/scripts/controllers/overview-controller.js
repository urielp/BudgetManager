'use strict';

/**
 * @ngdoc function
 * @name budgetManagerApp.controller:OverviewControllerCtrl
 * @description
 * # OverviewControllerCtrl
 * Controller of the budgetManagerApp
 */
angular.module('budgetManagerApp')
  .controller('OverviewControllerCtrl', function ($scope,outcomeIncomeService) {

    $scope.incomes =0;
    $scope.outcomes = 0;
    $scope.balance=0;
    //$scope.move = outcomeIncomeService.query();
    outcomeIncomeService.get(function(data){
      $scope.movments = data.movments;
      $scope.movments.forEach(function(entry)
      {
        if(entry.credit!=0) {
          $scope.incomes++;
          $scope.balance+=entry.credit;
        }
        else
        {
          $scope.outcomes++;
          $scope.balance+=entry.debit;
        }

      })
console.log("total outcomes : " +$scope.outcomes +"\n" +"total Incomes : " +$scope.incomes);
    });
    console.log($scope.movments);
    $scope.getExpenses = function()
    {
      console.log(movments);
      $scope.expenses = ExpensesListService.getExpenses();
    };


  });
