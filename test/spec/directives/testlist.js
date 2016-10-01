'use strict';

describe('Directive: testList', function () {

  // load the directive's module
  beforeEach(module('budgetManagerApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<test-list></test-list>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the testList directive');
  }));
});
