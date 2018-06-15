'use strict';

describe('Controller: ScenariosCtrl', function () {

  // load the controller's module
  beforeEach(module('sftp'));

  var ScenariosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ScenariosCtrl = $controller('ScenariosCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ScenariosCtrl.awesomeThings.length).toBe(3);
  });
});
