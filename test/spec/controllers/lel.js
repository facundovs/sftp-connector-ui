'use strict';

describe('Controller: LelCtrl', function () {

  // load the controller's module
  beforeEach(module('sftp'));

  var LelCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LelCtrl = $controller('LelCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LelCtrl.awesomeThings.length).toBe(3);
  });
});
