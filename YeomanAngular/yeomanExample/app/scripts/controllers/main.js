'use strict';

/**
 * @ngdoc function
 * @name yeomanSiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yeomanSiteApp
 */
angular.module('yeomanSiteApp')
        .controller('MainCtrl', function($scope) {
            $scope.awesomeThings = [
                'HTML5 Boilerplate',
                'AngularJS',
                'Karma'
            ];
        });
