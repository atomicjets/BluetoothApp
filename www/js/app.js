// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'bluetoothapp' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'bluetoothapp.controllers' is found in controllers.js
angular.module('bluetoothApp', ['ionic', 'ngCordovaBluetoothLE', 'ngCordova.plugins.bluetoothSerial'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

        .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'MenuCtrl'
    })

    .state('app.buttonsPad', {
        url: '/buttonsPad',
        views: {
            'menuContent': {
                templateUrl: 'templates/buttonsPad.html',
                controller: 'ButtonsPadCtrl'
            }
        }
    })

    .state('app.devices', {
            url: '/devices',
            views: {
                'menuContent': {
                    templateUrl: 'templates/devices.html',
                    controller: 'DevicesCtrl'
                }
            }
        })
        .state('bluetooth', {
            url: '/bluetooth',
            templateUrl: 'templates/bluetooth.html',
            controller: 'BluetoothCtrl'

        });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/devices');
});