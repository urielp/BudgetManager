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

    $scope.incomes =outcomeIncomeService.getTotalInceome();
    $scope.outcomes = outcomeIncomeService.getTotalOutCome();
    $scope.balance=outcomeIncomeService.getTotalBalance();
    $scope.period = outcomeIncomeService.getMonthPeriod();
    outcomeIncomeService.getDatePeriod();
  });
