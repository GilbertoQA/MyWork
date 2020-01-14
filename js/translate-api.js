

      var app = angular.module('at', ['pascalprecht.translate']);

      app.config(function ($translateProvider) {
        $translateProvider.translations('en', {
          TITLE: 'Hello',
          ABOUT: 'About in english',
          BUTTON_LANG_EN: 'english',
          BUTTON_LANG_DE: 'german'
        });
        $translateProvider.translations('sp', {
          TITLE: 'Hallo',
          ABOUT: 'Acerca en spanish',
          BUTTON_LANG_EN: 'englisch',
          BUTTON_LANG_DE: 'deutsch'
        });
        $translateProvider.preferredLanguage('en');
      });

      app.controller('Ctrl', function ($scope, $translate) {
        $scope.changeLanguage = function (key) {
          $translate.use(key);
        };
      });
