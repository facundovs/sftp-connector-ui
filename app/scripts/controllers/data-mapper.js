'use strict';


angular.module('sftpApp')
  .controller('DataMapperCtrl', function ($location) {
    console.info("Data Mapper controller is starting...");

    var vm = this;

    vm.getSuggestions = function () {
      console.info("Getting suggestions...");
      $location.path( "suggestion" );
    };

  });
