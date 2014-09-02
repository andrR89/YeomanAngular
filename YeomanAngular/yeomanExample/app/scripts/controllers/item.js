'use strict';
angular.module('yeomanSiteApp').controller("itemCtrl", function($scope, $routeParams, CardapioAPI)
{
    CardapioAPI.getCardapio($routeParams.id).success(function(data, status) {
        $scope.item = data;
    });

});