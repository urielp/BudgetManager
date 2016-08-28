'use strict';

/**
 * @ngdoc directive
 * @name budgetManagerApp.directive:sidebarPanel
 * @description
 * # sidebarPanel
 */
angular.module('budgetManagerApp')
  .directive('sidebarpanel', function ($location,$routeParams) {
    return {
      templateUrl: 'views/templates/sidebar-panel.html',
      restrict: 'E',
      link: function ($scope) {
        $scope.text ="sidebar-panel";
      }
    };
  });
