'use strict';

describe('Directive: cashflowgraphPanel', function () {

  // load the directive's module
  beforeEach(module('budgetManagerApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<cashflowgraph-panel></cashflowgraph-panel>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the cashflowgraphPanel directive');
  }));
});
