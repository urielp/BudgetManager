'use strict';

angular.module('budgetManagerApp', [
  'budgetManagerApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.bootstrap'
])
  .config(function(, $locationProvider) {

    $locationProvider.html5Mode(true);
  });
