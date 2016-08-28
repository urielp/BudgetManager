'use strict';

/**
 * @ngdoc directive
 * @name budgetManagerApp.directive:cashflowgraphPanel
 * @description
 * # cashflowgraphPanel
 */
angular.module('budgetManagerApp')
  .directive('cashflowgraphpanel', function ($location,$routeParams) {
    return {
      templateUrl: 'views/templates/cashflowgarph-panel.html',
      restrict: 'E',
      link: function ($scope) {
        
      }
    };
  });
