'use strict';


angular.module('sftpApp')
  .controller('DataMapperCtrl', function ($location) {
    console.info("Data Mapper controller is starting...");

    var vm = this;
    vm.mapper = {};
    vm.showElementumTemplate = false;

    vm.getSuggestions = function () {
      console.info("Getting suggestions...");
      $location.path( "suggestion" );
    };

    vm.changeEntityType = function() {
      console.info("change Entity type:" + vm.mapper.entityType);
      vm.showElementumTemplate = vm.mapper.entityType != '';
    }



  });
