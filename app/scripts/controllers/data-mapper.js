'use strict';


angular.module('sftpApp')
  .controller('DataMapperCtrl', function ($location,$timeout) {
    console.info("Data Mapper controller is starting...");

    var vm = this;
    vm.mapper = {};
    vm.showElementumTemplate = false;
    vm.jsonInput = "";

    vm.getSuggestions = function () {
      console.info("Getting suggestions...");
      $location.path( "suggestion" );
    };

    vm.changeEntityType = function() {
      console.info("change Entity type:" + vm.mapper.entityType);
      vm.showElementumTemplate = vm.mapper.entityType != '';
    };

    vm.upload = function () {
      $timeout(function () {
        vm.jsonInput = "{\r\n\"prt\":\"DummyValue\",\r\n\"prtName\":\"DummyValue\",\r\n\"prtType\":\"DummyValue\",\r\n\"prtParent\":\"DummyValue\",\r\n\"Address\":\"DummyValue\",\r\n\"CityLocality\":\"DummyValue\",\r\n\"StateRegion\":\"DummyValue\",\r\n\"PostalZipcode\":\"DummyValue\",\r\n\"Country\":\"DummyValue\",\r\n\"WebsiteURL\":\"DummyValue\",\r\n\"Contactperson\":\"DummyValue\",\r\n\"Phone\":\"DummyValue\",\r\n\"Email\":\"DummyValue\",\r\n\"Fax\":\"DummyValue\"\r\n}";
      }, 2500);
    };
    vm.cancel = function() {
      $location.path("/");
    }



  });
