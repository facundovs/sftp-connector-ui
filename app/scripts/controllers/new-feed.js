'use strict';

angular.module('sftpApp')
  .controller('NewFeedCtrl', function ($location, HttpService, growl) {
    console.info("Starting Feed controller...");
    var vm = this;
    vm.newFeed = null;

    vm.sendFeed = function (feed) {
      console.log("Send feed...", feed);
      HttpService.post("https://tkr051xexg.execute-api.us-east-1.amazonaws.com/v1/connectorconfigs", feed, function (response) {
          console.log("Posted Connector Configuration...");
        growl.success("The connector was saved", {"title": "Info"});
        $location.path("data-mapper");
      });
    };

    vm.cancel = function () {
      $location.path("/");
    };

  });
