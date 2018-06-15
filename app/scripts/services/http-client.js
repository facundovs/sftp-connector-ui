'use strict';

angular.module('sftpApp').factory('HttpService', HttpService);

function HttpService($http) {
  $http.defaults.useXDomain = true;
  delete $http.defaults.headers.common['X-Requested-With'];
  $http.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
  $http.defaults.headers.common = {};
  $http.defaults.headers.post = {};
  $http.defaults.headers.put = {};
  $http.defaults.headers.patch = {};
  $http.defaults.headers.post["Content-Type"] = "application/json";
  //  $http.defaults.headers.common["Accept"] = "application/json";


  var doNoOkDefault = function(response) {
    console.error("Generic error", response);
  };
  
  return {

    get:

      function(url, doOk, noOk) {
        console.log('getting ' + url);
        var doNoOk = null;

        if (angular.isUndefined(noOk)) {
          doNoOk = doNoOkDefault;
        } else {
          doNoOk = function (response) {
          }
        }

        var doGet = function() {
          $http({
            method: 'GET',
            url: url,
            headers: {
              'Content-Type': 'application/json',
            }
          }).then(doOk, doNoOk);
        };

        doGet();
      },

    delete: function(url, doOk, noOk) {
      console.log('delete ' + url + ' url.');

      var doNoOk = null;

      if (angular.isUndefined(noOk)) {
        doNoOk = doNoOkDefault;
      } else {
        doNoOk = function (response) {
        }
      }

      var doDelete = function() {
        $http({
          method: 'DELETE',
          url: url,
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(doOk, doNoOk);
      };

      doDelete();
    },

    put: function(url, params, doOk, noOk) {
      console.log('putting ' + url + ' url.');
      console.log('data: ' + JSON.stringify(params));

      var doNoOk = null;

      if (angular.isUndefined(noOk)) {
        doNoOk = doNoOkDefault;
      } else {
        doNoOk = function (response) {
          if(!invalidToken(response)){
            noOk(response);
          }
        }
      }

      var doPut = function() {
        $http({
          method: 'PUT',
          url: url,
          data: params,
          headers: {
            'Content-Type': 'application/json',
          }
        }).then(doOk, doNoOk);
      };
      doPut();
    },

    post: function(url, params, doOk, noOk) {
      console.log('posting ' + url + ' url.');
      console.log('data: ' + JSON.stringify(params));

      var doNoOk = null;

      if (angular.isUndefined(noOk)) {
        doNoOk = doNoOkDefault;
      } else {
        doNoOk = function (response) {
          noOk(response);
        }
      }

      var doPost = function() {
        $http({
          method: 'POST',
          url: url,
          data: params,
          headers: {
            // 'Content-Type': 'application/json',
          }
        }).then(doOk, doNoOk);
      };

      doPost();
    }

  };
}
