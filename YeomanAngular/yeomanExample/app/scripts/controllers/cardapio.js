'use strict';

angular.module('yeomanSiteApp').controller("cardapioCtrl", function($scope, CardapioAPI, $http) {
    $scope.itens = [];

    $scope.item = null;

    $scope.carregarCardapio = function() {
        CardapioAPI.getCardapios().success(function(data, status) {
            $scope.itens = data;
            console.log("Cardapio Carregado!");
        }).error(function(data, status) {
            console.error("Erro ao buscar Cardapio!");
        });
    };
    //$scope.itens = [{descricao : "Coca", preco : 9}];
    $scope.carregarCardapio();
});
'use strict';
angular.module('yeomanSiteApp').factory("CardapioAPI", function($http) {
    var _getCardapios = function() {
        return $http.get("http:192.168.0.18:3412/cardapio");
    };
    var _getCardapio = function(id) {
        return $http.get("http:192.168.0.18:3412/item/" + id);
    }
    return {
        getCardapios: _getCardapios,
        getCardapio: _getCardapio
    };
});