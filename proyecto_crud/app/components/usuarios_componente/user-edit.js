angular.module("userEdit", [])
.component("userEdit", {
  templateUrl: "./app/components/vista_usuarios/user-edit.html",
  controller: 'userEditController',
  bindings: {
    usuario2: "="
  }
})
.controller("userEditController", function($http,$scope){
    var vm = this;

    vm.$onInit = onInit
    vm.$postLink = postLink

 

    function onInit(){
          vm.updateUser = updateUser
    }

    function postLink(){
      //console.log('changes')
      
    }

    function getData($event, data){
      console.log($event, data)
    }
     //Update User
    function updateUser() {
      //console.log(vm)
      $http({
      method: 'PUT',
      url: 'https://jsonplaceholder.typicode.com/users/' + vm.usuario2.id,
      data: vm.usuario2

    }).then(function successCallback(response) {
      alert('registro actualizado')
    }, function errorCallback(response) {
    });

  };
 
})