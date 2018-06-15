'use strict';

describe('Controller: LelcrudCtrl', function () {

  // load the controller's module
  beforeEach(module('sftpApp'));

  var LelcrudCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LelcrudCtrl = $controller('LelcrudCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LelcrudCtrl.awesomeThings.length).toBe(3);
  });
});
