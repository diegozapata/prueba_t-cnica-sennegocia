angular.module("userList",[])
	.component("userList",{
		templateUrl: "./app/components/vista_usuarios/user-list.html",
		controller: "userListController"
  	
	})
	.controller("userListController", function($http, $scope) {
	    const vm = this;
	    $scope.agrega = true;
	    $scope.submit = true
	    vm.$onInit = onInit
	    vm.$postLink = postLink
	    vm.$onChanges = onChanges
        
	    function onInit() {
	      	vm.getUsers = getUsers
	      	vm.editarUsuario = editarUsuario
	      	vm.mostrarUsuario = mostrarUsuario
	      	vm.eliminarUsuario =eliminarUsuario
	      	vm.crearUsuario   =crearUsuario
	      	

	    	getUsers()

	    }

	    function postLink(){
	    	//console.log('postLink')
	    }
	     function onChanges() {


          };
	    function getUsers(){
	    	$http.get('https://jsonplaceholder.typicode.com/users')
				.then(function(data){					
					vm.usuarios = data.data;
				});
		}

		function editarUsuario(usuario1){
			vm.usuario1 = usuario1
			$scope.edita = true
			$scope.agrega = false
			$scope.submit = false

		}

		function mostrarUsuario(usuario){
			$scope.detalles = true;
			vm.usuario = usuario

		}	

        function eliminarUsuario(user) {
        	   fetch('https://jsonplaceholder.typicode.com/users/' + user.id, {
                  method: 'DELETE'
         }).then(function successCallback(response) {
           var index = vm.usuarios.indexOf(user);
            vm.usuarios.splice(index, 1);
        }, function errorCallback(response) {

    });	

  };



        function crearUsuario() {
        	fetch('https://jsonplaceholder.typicode.com/users', {
             method: 'POST',
             body: JSON.stringify({
            	 name: $scope.usuario.name,
                 username: $scope.usuario.username,
                 email:  $scope.usuario.email
              }),
            headers: {
             "Content-type": "application/json; charset=UTF-8"
            }
         })
    		.then(function successCallback(response) {
    			console.log(response.data)
           vm.usuarios.push(response.data);
           }, function errorCallback(response) {
         });

       };

	})