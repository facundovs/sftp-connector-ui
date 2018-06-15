'use strict';

angular
  .module('sftpApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'smart-table',
    'pascalprecht.translate'
  ])
  .config(function ($routeProvider,$translateProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/data-mapper', {
        templateUrl: 'views/data-mapper.html',
        controller: 'DataMapperCtrl',
        controllerAs: 'dataMapper'
      })
      .when('/suggestion', {
        templateUrl: 'views/suggestion.html',
        controller: 'SuggestionCtrl',
        controllerAs: 'suggestion'
      })
      .when('/feed', {
        templateUrl: 'views/feed.html',
        controller: 'FeedCtrl',
        controllerAs: 'feed'
      })
      .otherwise({
        redirectTo: '/'
      });
      var translationEntries =[];
      var langMap = {
          'en_AU': 'en',
          'en_CA': 'en',
          'en_NZ': 'en',
          'en_PH': 'en',
          'en_UK': 'en',
          'en_US': 'es',
          'es_AR': 'es',
          'es_BO': 'es',
          'es_CL': 'es',
          'es_CO': 'es',
          'es_CR': 'es',
          'es_DO': 'es',
          'es_EC': 'es',
          'es_SV': 'es',
          'es_GT': 'es',
          'es_HN': 'es',
          'es_MX': 'es',
          'es_NI': 'es',
          'es_PA': 'es',
          'es_PY': 'es',
          'es_PE': 'es',
          'es_PR': 'es',
          'es_ES': 'es',
          'es_UY': 'es',
          'es_VE': 'es'
      };

      var files = [
          'commons.json'
      ];
      angular.forEach(files, function (file) {
          translationEntries.push({ prefix: 'translations/', suffix: '/' + file });
      });

      $translateProvider.useSanitizeValueStrategy(null).useStaticFilesLoader({ files: translationEntries })
          .registerAvailableLanguageKeys(['en', 'es'], langMap).determinePreferredLanguage().fallbackLanguage(['en']);



  });
