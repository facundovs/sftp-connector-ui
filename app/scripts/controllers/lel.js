'use strict';

/**
 * @ngdoc function
 * @name requirementResearchApp.controller:LelCtrl
 * @description
 * # LelCtrl
 * Controller of the requirementResearchApp
 */
angular.module('sftpApp')
  .controller('LelCtrl', function ($location,$log) {
    $log.debug("LelController is Starting...")
      var vm = this;
      vm.listOfLels = [
          {
              "name" : "Lel1",
              "description" : "Description1",
              "customer" : "Customer1"
          },
          {
              "name" : "Lel2",
              "description" : "Description2",
              "customer" : "Customer2"
          },
          {
              "name" : "Lel3",
              "description" : "Description3",
              "customer" : "Customer3"
          }
      ];
    vm.newLel = function () {
      $location.path("/LelCrud");
    }
  });
