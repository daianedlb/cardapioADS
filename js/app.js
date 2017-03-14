angular.module('cardapioADSApp',['ngRoute'])

.config(function($routeProvaider){

    $routeProvaider.when('/',{
        templateUrl: 'view/login.html',
        controler:'loginCtrl'
    });
    // redireciona o usuario para a tela / quando ele digitar uma url inválida após a /
    $routeProvaider.otherwise({redirectTo:'/'})

});