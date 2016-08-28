'use strict';

/**
 * @ngdoc service
 * @name budgetManagerApp.outcomeIncomeService
 * @description
 * # outcomeIncomeService
 * Service in the budgetManagerApp.
 */
angular.module('budgetManagerApp')
  .factory('outcomeIncomeService', function ($resource) {
    return $resource('movements.json');
  });
