'use strict';

describe('Controller: AccountsCtrl', function () {

  // load the controller's module
  beforeEach(module('budgetManagerApp'));

  var AccountsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AccountsCtrl = $controller('AccountsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
  });
});
