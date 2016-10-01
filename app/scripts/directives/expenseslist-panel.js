'use strict';

/**
 * @ngdoc directive
 * @name budgetManagerApp.directive:ExpensesListPanel
 * @description
 * # ExpensesListPanel
 */
angular.module('budgetManagerApp')
  .directive('expenseslistpanel', function ($location,$modal,$routeParams,ExpensesListService,outcomeIncomeService) {
    return {
      templateUrl: 'views/templates/overview-panel.html',
      restrict: 'E',
      controller:'OverviewControllerCtrl',
      link: function ($scope) {
      // $scope.expenselist ={};

        $scope.showIncomeListModal=function()
        {
          $location.path( '/incomelist' );
          //addToIncomeListModal.$promise.then(addToIncomeListModal.show);
        };

        $scope.showModal=function()
        {
          $location.path( '/expenseslist' );
          //addToExpenseListModal.$promise.then(addToExpenseListModal.show);
        };
/*
      var addToExpenseListModal = $modal({
        scope:$scope,
        templateUrl:'views/templates/expensesList-modal.html',
        show:false
      });
      $scope.expenselist = outcomeIncomeService.getexpenses();
        $scope.showModal=function()
        {
          $location.path( '/expenseslist' );
          //addToExpenseListModal.$promise.then(addToExpenseListModal.show);
        };


        var addToIncomeListModal = $modal({
          scope:$scope,
          templateUrl:'views/templates/incomeList-modal.html',
          show:false
        });
        $scope.incomelist = outcomeIncomeService.getIncomes();
        $scope.showIncomeListModal=function()
        {
          $location.path( '/incomelist' );
          //addToIncomeListModal.$promise.then(addToIncomeListModal.show);
        };

*/
    }
    };
  });
