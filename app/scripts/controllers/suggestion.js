'use strict';


angular.module('sftpApp')
  .controller('SuggestionCtrl', function ($location,HttpService) {
    console.info("Suggestions controller is starting...");

    var vm = this;

    vm.init = function () {
      vm.getSuggestions();
    };

    vm.getSuggestions = function () {
      console.info("Get suggestions from server...");
      HttpService.post("https://tkr051xexg.execute-api.us-east-1.amazonaws.com/v1/suggestions", null, function (response){
        console.log("Received response", response.data);
        vm.data = response.data;
        vm.original = angular.copy(vm.data)
        console.info("data:" + vm.data.length);
      });
    };

    vm.updateConfidenceLevel = function(entity,row) {
      console.log("Elementum field changed...",entity,row);
      row.confidenceLevel ='';
      console.log("Searchig for entity",entity.entity)
      for (var i = 0; i < vm.original.length; i++) {
        if(vm.original[i].entity == entity.entity){
          console.log("searching in", row.clientIdentifier, row.elementumIdentifier)
          for(var j = 0; j < vm.original[i].mapping.length; j++) {
            if(vm.original[i].mapping[j].elementumIdentifier == row.elementumIdentifier && vm.original[i].mapping[j].clientIdentifier == row.clientIdentifier ) {
              console.log(vm.original[i].mapping[j].confidenceLevel);
              row.confidenceLevel = vm.original[i].mapping[j].confidenceLevel;
            }
          }
        }
          //Do something
      }
    }

    vm.cancel = function () {
      $location.path("/");
    };

    vm.init();

  });
