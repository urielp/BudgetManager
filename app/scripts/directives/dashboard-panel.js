'use strict';

/**
 * @ngdoc directive
 * @name budgetManagerApp.directive:dashboardPanel
 * @description
 * # dashboardPanel
 */
angular.module('budgetManagerApp')
  .directive('dashboardpanel', function ($location,$routeParams) {
    return {
      templateUrl: 'views/templates/dashboard-panel.html',
      restrict: 'E',
      link: function ($scope) {

      }
    };
  });
