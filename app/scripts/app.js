'use strict';

/**
 * @ngdoc overview
 * @name budgetManagerApp
 * @description
 * # budgetManagerApp
 *
 * Main module of the application.
 */
angular
  .module('budgetManagerApp',[
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'mgcrea.ngStrap',
    'nvd3'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/expenseslist', {
        templateUrl: 'views/expenseslist.html',
        controller: 'ExpenseslistCtrl',
        controllerAs: 'expenseslist'
      })
      .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl',
        controllerAs: 'dashboard'
      })
      .when('/incomelist', {
        templateUrl: 'views/incomelist.html',
        controller: 'IncomelistCtrl',
        controllerAs: 'incomelist'
      })
      .otherwise({
        redirectTo: '/dashboard'
      });
  });
