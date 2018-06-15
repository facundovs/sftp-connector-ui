'use strict';

angular.module('sftpApp')
  .controller('sftpApp', function ($log,$location) {
    var vm = this;
    vm.customers=["customer1","customer2","customer3"];
    $log.debug("LelCrudCtrl is Starting");
    vm.goToLelList = function(){
      $location.path("/Lel");
    }
  });
