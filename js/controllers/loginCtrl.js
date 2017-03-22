angular.module('cardapioADSApp')

.controller('loginCtrl',function($scope, $location){

    // {objeto} 
    $scope.usuario = {
            login: null,
            senha: null
    }
    var usuarioPadrao = {
        login : 'admin',
        senha : 'admin'
};
    //  neste caso {Abre o corpo da funcao}
    $scope.acessarSistema = function(usuarioInformado) {
         if (usuarioInformado.login == usuarioPadrao.login && usuarioInformado.senha == usuarioPadrao.senha) {
             console.log('Login efetuado com sucesso');
             $location.path('/home');
        } else {
         console.log('Login Invalido');
        }
    }

});