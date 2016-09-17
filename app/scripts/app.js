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
      .otherwise({
        redirectTo: '/'
      });
  });
