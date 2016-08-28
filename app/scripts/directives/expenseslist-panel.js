'use strict';

/**
 * @ngdoc directive
 * @name budgetManagerApp.directive:ExpensesListPanel
 * @description
 * # ExpensesListPanel
 */
angular.module('budgetManagerApp')
  .directive('expenseslistpanel', function ($location,$routeParams,ExpensesListService) {
    return {
      templateUrl: 'views/templates/overview-panel.html',
      restrict: 'E',
      controller:'OverviewControllerCtrl',
      link: function($scope) {

        $scope.getExpenses = ExpensesListService.getExpenses();

        $scope.getMessage =function()
        {
          console.log("Hello World");
        }

      }
    };
  });
