'use strict';

describe('Controller: GraohcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('budgetManagerApp'));

  var GraohcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GraohcontrollerCtrl = $controller('GraohcontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GraohcontrollerCtrl.awesomeThings.length).toBe(3);
  });
});
