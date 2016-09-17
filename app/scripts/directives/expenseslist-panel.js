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
      $scope.expenselist ={};
      var addToExpenseListModal = $modal({
        scope:$scope,
        template:'views/templates/add-tolist-modal.html',
        show:false
      });
      $scope.expenselist= outcomeIncomeService.test1();


      $scope.showModal=function()
      {
        addToExpenseListModal.$promise.then(addToExpenseListModal.show);
      }
    }
    };
  });
