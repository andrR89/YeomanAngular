'use strict';

/**
 * @ngdoc function
 * @name yeomanSiteApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yeomanSiteApp
 */
angular.module('yeomanSiteApp')
        .controller('AboutCtrl', function($scope) {
            $scope.awesomeThings = [
                'HTML5 Boilerplate',
                'AngularJS',
                'Karma'
            ];
        });
