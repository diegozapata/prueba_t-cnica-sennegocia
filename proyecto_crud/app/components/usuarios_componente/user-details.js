angular.module("userDetails", [])
.component("userDetails", {
  templateUrl: "./app/components/vista_usuarios/user-delaits.html",
  controller: 'userDetailsController',
  bindings: {
    usuario: "="
  }
})
.controller("userDetailsController", function($scope){
    var vm = this;

    vm.$onInit = onInit
    vm.$postLink = postLink



    function onInit(){
       $scope.$on('getData', getData)
    }
    function postLink(){
      //console.log('changes')
    }
    function getData($event, data){
      console.log($event, data)
    }
 
})