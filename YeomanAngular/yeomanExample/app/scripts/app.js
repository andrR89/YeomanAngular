'use strict';

/**
 * @ngdoc overview
 * @name yeomanSiteApp
 * @description
 * # yeomanSiteApp
 *
 * Main module of the application.
 */
angular
        .module('yeomanSiteApp', [
            'ngAnimate',
            'ngCookies',
            'ngResource',
            'ngRoute',
            'ngSanitize',
            'ngTouch',
            "ngMockE2E"
        ])
        .config(function($routeProvider) {
            $routeProvider
                    .when('/', {
                        templateUrl: 'views/main.html',
                        controller: 'MainCtrl'
                    })
                    .when('/cardapio', {
                        templateUrl: 'views/cardapio.html',
                        controller: 'cardapioCtrl'
                    })
                    .when('/item/:id', {
                        templateUrl: 'views/item.html',
                        controller: 'itemCtrl'
                    })
                    .when('/pedidos', {
                        templateUrl: 'views/pedido.html',
                        controller: 'pedidosCtrl'
                    })
                    .when('/about', {
                        templateUrl: 'views/about.html',
                        controller: 'AboutCtrl'
                    })
                    .otherwise({
                        redirectTo: '/'
                    });
        }).run(function($httpBackend) {
    $httpBackend.whenGET("http:192.168.0.18:3412/cardapio").respond(function(method, url, data, headers) {
        var cardapio = [
            {id: 1, descricao: "Coca-Cola", detalhes: "Eh coca poha", preco: 15, imagem: "coca.jpg"},
            {id: 2, descricao: "Água", detalhes: "agua de Merda", preco: 23, imagem: "agua.jpg"}];
        return [200, cardapio, {}];
    });
    $httpBackend.whenGET("http:192.168.0.18:3412/item/1").respond(function(method, url, data, headers) {
        return [200, {id: 1, descricao: "Coca-Cola", detalhes: "Eh coca poha", preco: 15, imagem: "coca.jpg"}, {}];
    });
    $httpBackend.whenGET("http:192.168.0.18:3412/item/2").respond(function(method, url, data, headers) {
        return [200, {id: 2, descricao: "Água", detalhes: "agua de Merda", preco: 23, imagem: "agua.jpg"}, {}];
    });
    $httpBackend.whenGET(/./).passThrough();
});
;
