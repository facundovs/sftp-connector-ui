'use strict';

angular.module('sftpApp')
  .controller('FeedCtrl', function ($location, HttpService, growl) {
    console.info("Starting Feed controller...");
    var vm = this;
    vm.feeds = null;

    vm.getFeeds = function () {
      console.log("Getting feeds...");
      HttpService.get("http://localhost:8080/connectors/v1/connectorconfigs", function (response) {
        vm.feeds = response.data;
        console.log("Feeds obtained!", vm.feeds);
      });
    };

    vm.newFeed = function () {
      $location.path("new-feed");
    };

    vm.updateFeed = function (feed) {
      console.log("Update feeds...", feed);
      HttpService.put("https://tkr051xexg.execute-api.us-east-1.amazonaws.com/v1/connectorconfigs", feed, function (response) {
        growl.success("The connector was updated", {"title": "Info"});
        console.log("Feeds updated!", vm.feeds);
      });
    };


    vm.getFeeds();
  });
