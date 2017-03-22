angular.module('cardapioADSApp',['ngRoute'])

.config(function($routeProvider){

    $routeProvider.when('/',{
        templateUrl: 'view/login.html',
        controller:'loginCtrl'
    }).when('/home', {
        templateUrl:'view/home.html',
        controller:'homeCtrl'
    });
    // redireciona o usuario para a tela / quando ele digitar uma url inválida após a /
    $routeProvider.otherwise({redirectTo:'/'});

});