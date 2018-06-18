'use strict';


angular.module('sftpApp')
  .controller('SuggestionCtrl', function ($location,HttpService,growl) {
    console.info("Suggestions controller is starting...");

    var vm = this;
    vm.rawData = {
      prt:"DummyValue",
      prtName:"DummyValue",
      prtType:"DummyValue",
      prtParent:"DummyValue",
      Address:"DummyValue",
      CityLocality:"DummyValue",
      StateRegion:"DummyValue",
      PostalZipcode:"DummyValue",
      Country:"DummyValue",
      WebsiteURL:"DummyValue",
      Contactperson:"DummyValue",
      Phone:"DummyValue",
      Email:"DummyValue",
      Fax:"DummyValue"
    };

    vm.init = function () {
      vm.getSuggestions();
    };

    vm.getSuggestions = function () {
      console.info("Get suggestions from server...");
      HttpService.post("http://localhost:8080/connectors/v1/suggestions", vm.rawData, function (response){

      // HttpService.post("http://localhost:8080/connectors/v1/suggestions", vm.rawData, function (response){
        console.log("Received response", response.data);
        vm.data = response.data;
        vm.original = angular.copy(vm.data);
        console.info("data:" + vm.data.length);
      });
    };

    vm.updateConfidenceLevel = function(entity,row) {
      console.log("Elementum field changed...",entity,row);
      row.confidenceLevel ='';
      console.log("Searchig for entity",entity.entity);
      // for (var i = 0; i < vm.original.length; i++) {
      //   if(vm.original[i].entity == entity.entity){
          console.log("searching in", row.clientIdentifier, row.elementumIdentifier);
          console.log("lenght", vm.original.mapping.length);
          for(var j = 0; j < vm.original.mapping.length; j++) {

            if(vm.original.mapping[j].elementumIdentifier == row.elementumIdentifier && vm.original.mapping[j].clientIdentifier == row.clientIdentifier ) {
              console.log(vm.original.mapping[j].confidenceLevel);
              row.confidenceLevel = vm.original.mapping[j].confidenceLevel;
            }
        //   }
        // }
      }
    }

    vm.enableConnection = function(){
      console.info("Enabling Connection...");
      HttpService.put("https://tkr051xexg.execute-api.us-east-1.amazonaws.com/v1/connectorconfigs", null, function (response) {
        growl.success("The connector was updated", {"title": "Info"});
        console.log("Feeds updated!", vm.feeds);
        $location.path("/");
      });
    }

    vm.cancel = function () {
      $location.path("/");
    };

    vm.init();

  });
