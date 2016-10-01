'use strict';

/**
 * @ngdoc directive
 * @name budgetManagerApp.directive:testList
 * @description
 * # testList
 */
angular.module('budgetManagerApp')
  .directive('expenselistview', function ($location,$modal) {
    return {
      templateUrl: 'views/templates/expenseListView.html',
      restrict: 'E',
      controller:'ExpenseslistCtrl',
      link: function postLink($scope) {
        var addToExpenseListModal = $modal({
          scope:$scope,
          templateUrl:'views/templates/expensesList-modal.html',
          show:false
        });
        $scope.expense ={};
        $scope.showModal=function()
        {
          console.log("showModal(directive)");
          addToExpenseListModal.$promise.then(addToExpenseListModal.show);
        };

        $scope.addExpense = function()
        {
          console.log("addExpense(directive)");
          $scope.addExpense2($scope.expense);
          addToExpenseListModal.hide();
        }
      }
    };
  });
