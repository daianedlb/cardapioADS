angular.module('cardapioADSApp',['ngRoute'])

.config(function($routeProvider){

    $routeProvider.when('/',{
        templateUrl: 'view/login.html',
        controller:'loginCtrl'
    }).when('/home', {
        templateUrl:'view/home.html',
        controller:'homeCtrl'
    }).when('/pedido', {
        templateUrl:'view/pedido.html',
        controller:'pedidoCtrl'
    }).when('/produtos', {
        templateUrl:'view/produtos.html',
        controller:'produtosCtrl'
    }).when('/clientes', {
        templateUrl:'view/clientes.html',
        controller:'clientesCtrl'
    }).when('/usuarios', {
        templateUrl:'view/usuarios.html',
        controller:'usuariosCtrl'
    })
    ;
    // redireciona o usuario para a tela / quando ele digitar uma url inválida após a /
    $routeProvider.otherwise({redirectTo:'/'});

});