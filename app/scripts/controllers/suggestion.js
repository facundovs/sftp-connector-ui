'use strict';


angular.module('sftpApp')
  .controller('SuggestionCtrl', function (HttpService) {
    console.info("Suggestions controller is starting...");

    var vm = this;

    vm.init = function () {
      vm.getSuggestions();
    };

    vm.getSuggestions = function () {
      console.info("Get suggestions from server...");
      HttpService.post("https://tkr051xexg.execute-api.us-east-1.amazonaws.com/v1/suggestions", null, function (response){
        console.log("Received response", response.data);
      });
    };

    vm.init();

  });
