'use strict';

angular.module('yeomanSiteApp').controller("pedidosCtrl", function($scope, PedidoAPI, CardapioAPI) {
    $scope.pedidos = [];

    $scope.itensPedido = [];

    $scope.carregarItens = function() {
        CardapioAPI.getCardapios().success(function(data, status) {
            $scope.itensPedido = data;
            console.log("Itens Encontrados!");
        }).error(function(data, status) {
            console.error("Erro ao buscar Itens!");
        });
    };
    $scope.carregarItens();

    $scope.carregarPedidos = function() {
        PedidoAPI.getPedidos().success(function(data, status) {
            $scope.pedidos = data;
            for (i = 0; i < $scope.pedidos.length; i++) {
                $scope.atualizarQuantidade($scope.pedidos[i]);
            }
            console.log("Pedidos Encontrados!");
        }).error(function(data, status) {
            console.error("Erro ao Carregar Pedidos");
        });
    };

    $scope.total = 0.0;

    $scope.carregarPedidos();
    //$scope.pedidos = [{quantidade: 1, item:{descricao:"Coca", preco:10}}];

    $scope.adicionarPedidos = function(pedido)
    {
        pedido.data = new Date();
        $scope.atualizarQuantidade(pedido);
        $scope.pedidos.push(angular.copy(pedido));
        delete $scope.pedido.data;
        delete $scope.pedido.total;
        PedidoAPI.savePedido(pedido).success(function(data, status) {
            $scope.carregarPedidos();
            delete $scope.pedido;
            $scope.pedidoForm.$setPristine(true);
            console.log("Pedido Salvo!");
        }).error(function(data, status) {
            console.error(data);
        });
    }

    $scope.cancelarPedidos = function(pedido) {
        $scope.pedidos.splice($scope.pedidos.indexOf(pedido), 1);
        $scope.total -= (pedido.total);
        delete $scope.pedido;
    }

    $scope.mostrarDetalhes = function(pedido) {
        pedido.showDetalhes = !pedido.showDetalhes;
    }

    $scope.atualizarQuantidade = function(pedido) {
        pedido.total = (pedido.item.preco * pedido.quantidade);
        $scope.total += (pedido.total);
    }

    $scope.atualizarQuantidade2 = function(pedido) {
        $scope.total -= pedido.total;
        $scope.atualizarQuantidade(pedido);
    }
});

angular.module('yeomanSiteApp').service("PedidoAPI", function($http) {
    this.getPedidos = function() {
        return $http.get("http://192.168.0.18:3412/pedidos");
    };
    this.savePedido = function(pedido) {
        return $http.post("http://192.168.0.18:3412/pedidos", pedido)
    };
});