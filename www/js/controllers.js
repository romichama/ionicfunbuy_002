angular.module('starter.controllers', ['firebase','ngCordova','ionic.service.core'])


.controller('DashCtrl', function($scope, $firebaseArray) {

	$scope.ref = new Firebase("https://shining-inferno-7335.firebaseio.com/products");
	$scope.products = $firebaseArray($scope.ref);
 
  $scope.addItems = function() {
    var product = {'name':'Iphone', 'sale_price': 78.10, 'img':'http://www.att.com/wireless/iphone/assets/207138-iPhone6-device2.jpg'};
    var product2 = {'name':'Android', 'sale_price': 78.10, 'img':'http://www.att.com/wireless/iphone/assets/207138-iPhone6-device2.jpg'};
    $scope.products.push(product);
    $scope.products.push(product2);

   // $scope.$broadcast('scroll.infiniteScrollComplete')
  }

  $scope.doRefresh = function() {
    var product = {'name':'Iphone', 'sale_price': 78.10, 'img':'http://www.att.com/wireless/iphone/assets/207138-iPhone6-device2.jpg'};
    var product2 = {'name':'Android', 'sale_price': 78.10, 'img':'http://www.att.com/wireless/iphone/assets/207138-iPhone6-device2.jpg'};
    $scope.products.push(product);
    $scope.products.push(product2);

    //$scope.$broadcast('scroll.infiniteScrollComplete')
  }

})


.controller('DashFormCtrl', function($scope, $firebaseArray, $rootScope, $state, $cordovaCamera, $cordovaGeolocation) {
    //  $scope.product = [{'name':'Iphone', 'name1':'name 1', content: {descripcion: 'descripcion'} , categoria: 'comida', 'name2':'http://www.att.com/wireless/iphone/assets/207138-iPhone6-device2.jpg'] 
    $scope.product = {name: '', name1: '', content: {description: ''}, categoria: '', talla: '', cantidad: '', genero:'', precio:'', photo: '', lat: -17.37, long: -66.15};
    //document.addEventListener("deviceready", function () {
    $scope.takePicture = function() {
          var options = {
              quality : 75,
              destinationType : Camera.DestinationType.DATA_URL,
              sourceType : Camera.PictureSourceType.CAMERA,
              allowEdit : true,
              encodingType: Camera.EncodingType.JPEG,
              popoverOptions: CameraPopoverOptions,
              targetWidth: 500,
              targetHeight: 500,
              saveToPhotoAlbum: false
          };
          $cordovaCamera.getPicture(options).then(function(imageData) {
              //syncArray.$add({image: imageData}).then(function() {
              //    alert("Image has been uploaded");
              //});
              console.log(imageData);
              $scope.product.photo = imageData;

          }, function(error) {
              console.error(error);
          });
      }
    //}, false);

$scope.detailOfertas = function () {
    // $window.location.href = ('#/tab/dash-form');
   //var name = prompt("hola como estas");
     $state.go('detail-in');

      

     }

  $scope.venderProduct = function() {
      var productRef =  $rootScope.refirebase.child("products").push($scope.product);
      var productId = productRef.key();
      console.log(productId);
      $state.go('tab.vendedor',{productId: productId});
    }
})

.controller('InOfertasCtrl', function($scope,$stateParams, $firebaseArray, $rootScope, $state, $cordovaCamera, $cordovaGeolocation) {
    $scope.ofertasuno = function () {
    // $window.location.href = ('#/tab/dash-form');
     //var name = prompt("hola como estas");
     //$state.go('tab.ofertas-detail');
   }
})

.controller('oferta0Ctrl', function($scope,$stateParams, $firebaseArray, $rootScope, $state, $cordovaCamera, $cordovaGeolocation) {
    $scope.ofertas0 = function () {
    // $window.location.href = ('#/tab/dash-form');
     //var name = prompt("hola como estas");
     $state.go('tab.vendedor-form');
   }
})

.controller('oferta1Ctrl', function($scope,$stateParams, $firebaseArray, $rootScope, $state, $cordovaCamera, $cordovaGeolocation) {
    $scope.ofertas0 = function () {
    // $window.location.href = ('#/tab/dash-form');
     //var name = prompt("hola como estas");
     $state.go('tab.vendedor-form');
   }
})
.controller('oferta2Ctrl', function($scope,$stateParams, $firebaseArray, $rootScope, $state, $cordovaCamera, $cordovaGeolocation) {
    $scope.ofertas0 = function () {
    // $window.location.href = ('#/tab/dash-form');
     //var name = prompt("hola como estas");
     $state.go('tab.vendedor-form');
   }
})
.controller('oferta3Ctrl', function($scope,$stateParams, $firebaseArray, $rootScope, $state, $cordovaCamera, $cordovaGeolocation) {
    $scope.ofertas0 = function () {
    // $window.location.href = ('#/tab/dash-form');
     //var name = prompt("hola como estas");
     $state.go('tab.vendedor-form');
   }
})
.controller('oferta4Ctrl', function($scope,$stateParams, $firebaseArray, $rootScope, $state, $cordovaCamera, $cordovaGeolocation) {
    $scope.ofertas0 = function () {
    // $window.location.href = ('#/tab/dash-form');
     //var name = prompt("hola como estas");
     $state.go('tab.vendedor-form');
   }
})

.controller('ItemFormCtrl', function($scope,$stateParams, $firebaseArray, $rootScope, $state, $cordovaCamera, $cordovaGeolocation) {
 var lista = $stateParams.listaId;
console.log(lista);
 $scope.items = {nombre: '',caracteristica: '',categoria: '',calidad: '',habito: '',precio: '', listaid: lista};
   
    $scope.createItems = function() {

      var itemsRef =  $rootScope.refirebase.child("items").push($scope.items);
      var itemsId = itemsRef.key();
      console.log(itemsId);
      $state.go('tab.productos',{listaId: lista});
    };
})




.controller('ListaCtrl', function($scope, $firebaseArray) {

  $scope.ref = new Firebase("https://amber-inferno-4658.firebaseio.com/listas");
  $scope.listas = $firebaseArray($scope.ref);
 

})

.controller('ListaFormCtrl', function($scope, $firebaseArray, $rootScope, $state) {

    $scope.lista = {nombre: '', descripcion: '', frecuencia: ''};

    $scope.createLista = function() {
     
      var listaRef =  $rootScope.refirebase.child("listas").push($scope.lista);
      var listaId = listaRef.key();
      console.log(listaId);
         $state.go('tab.comprar-l',{listaId: listaId});

 
   };
})

.controller('ListaDetailCtrl', function($scope, $stateParams, $firebaseObject, $firebaseArray) {

  var ref = new Firebase("https://amber-inferno-4658.firebaseio.com/listas/"+$stateParams.listaId);
  var ref1 = new Firebase("https://amber-inferno-4658.firebaseio.com/items");
   ref1.orderByChild("listaid").equalTo($stateParams.listaId).on("child_added", function(snapshot) {
   //console.log(snapshot.key() + " was " + snapshot.val().nombre + " meters tall");
  //  $scope.items = [{'name':snapshot.val().nombre, 'des': 78.10}, {'name':'Samsung', 'des': snapshot.val().nombre, 'img': 'http://www.att.com/wireless/iphone/assets/207138-iPhone6-device2.jpg'}] 

 // var br = snapshot.val();
  $scope.va = (snapshot.val());
  console.log($scope.va);
  });
   //$scope.ref2 = ref1;
  //$scope.items = [{'name':'sin ir a dormir', 'calidad': 78.10}, {'name':'Samsung', 'calidad': 'des no puedo ', 'img': 'http://www.att.com/wireless/iphone/assets/207138-iPhone6-device2.jpg'}] 

  $scope.items = $firebaseArray(ref1);
  
  $scope.lista = $firebaseObject(ref);
//console.log($scope.lista);
})


.controller('ItemDetailCtrl', function($scope, $stateParams, $firebaseObject, $firebaseArray) {

  var ref = new Firebase("https://amber-inferno-4658.firebaseio.com/items/"+$stateParams.itemId);

   $scope.item = $firebaseObject(ref);
})

.controller('ComprandoItemDetailCtrl', function($scope, $stateParams, $firebaseObject, $firebaseArray, $ionicPopup) {

  var ref = new Firebase("https://amber-inferno-4658.firebaseio.com/items/"+$stateParams.itemId);
  $scope.item = $firebaseObject(ref);


  
  $scope.ref1 = new Firebase("https://shining-inferno-7335.firebaseio.com/products");
  $scope.products = $firebaseArray($scope.ref1);




  $scope.verDetalle = function(product) 
  {
 console.log(product);
       var alertPopup = $ionicPopup.alert({
          title: 'Los datos Producto en Venta: '+product.name+'',
          template: 'Name:'+product.name+'Descripcion:'+product.prices+'Precio:'
          
       });

     }

})

.controller('CompraListaCtrl', function($scope, $stateParams, $firebaseObject, $firebaseArray, $ionicPopup) {

  
  
  $scope.ref1 = new Firebase("https://shining-inferno-7335.firebaseio.com/products");
  $scope.products = $firebaseArray($scope.ref1);


//  $scope.products = [{'name':'Iphone', 'prices': 78.10, 'img':'http://www.att.com/wireless/iphone/assets/207138-iPhone6-device2.jpg'}, {'name':'Samsung', 'prices': 78.10, 'img': 'http://www.att.com/wireless/iphone/assets/207138-iPhone6-device2.jpg'}] 


  $scope.verDetalle = function(product) 
  {
 console.log(product);
       var alertPopup = $ionicPopup.alert({
          title: 'Los datos Producto en Venta: '+product.name+'',
          template: 'Name:'+product.name+'Descripcion:'+product.prices+'Precio:'
          
       });

     }

})



.controller('ChatsCtrl', function($scope, Chats, $rootScope, $state, $ionicHistory) {

  if (!$rootScope.userSignedIn()){
    $ionicHistory.nextViewOptions({
      disableAnimate: true,
      disableBack: true
    });
    $state.go('sign-in');
  }
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('DashDetailCtrl', function($scope, $stateParams, $firebaseObject) {

	var ref = new Firebase("https://shining-inferno-7335.firebaseio.com/products/"+$stateParams.productId);


	$scope.product = $firebaseObject(ref);

  $scope.product.$loaded().then(function() {
    $scope.loadMap();
  });

	console.log($scope.product);


  $scope.loadMap = function(){

    console.log("Producto");
    console.log($scope.product);

    console.log($scope.product.lat);
    console.log($scope.product.long);

    var myLatlng = new google.maps.LatLng($scope.product.lat, $scope.product.long);

    console.log(myLatlng);

    var mapOptions = {
        center: myLatlng,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("map1"), mapOptions);

    var marker = new google.maps.Marker({
            position: new google.maps.LatLng($scope.product.lat, $scope.product.long),
            map: map,
            title: $scope.product.name
    });
  }

})


.controller('TiendaFormCtrl', function($scope, $firebaseArray, $rootScope, $state, $cordovaCamera, $cordovaGeolocation) {


    $scope.tienda = {nombre: '', caracteristica: '', direccion: '', content: {descripcion: ''}, afiliacion: '', telefono: '', precio: '',photo: '', lat: -17.37, long: -66.15};


      var myLatlng = new google.maps.LatLng(-17.37, -66.15);

      var mapOptions = {
          center: myLatlng,
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
      };
/*
      var map = new google.maps.Map(document.getElementById("map"), mapOptions);
      var marker = new google.maps.Marker({
              position: new google.maps.LatLng(-17.37, -66.15),
              map: map,
              title: "Mi locacion",
              options: { draggable: true }
      });
*/


    var posOptions = {timeout: 10000, enableHighAccuracy: false};

    $cordovaGeolocation
    .getCurrentPosition(posOptions)
    .then(function (position) {
      console.log(position);
      $scope.product.lat  = position.coords.latitude
      $scope.product.long = position.coords.longitude

      map.setCenter(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
          
      marker.setPosition(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));

    }, function(err) {
        console.log(err);
    });


    var watchOptions = {
      frequency : 1000,
      timeout : 3000,
      enableHighAccuracy: false // may cause errors if true
    };

    var watch = $cordovaGeolocation.watchPosition(watchOptions);
    watch.then(
      null,
      function(err) {
        console.log(err);
      },
      function(position) {
        console.log(position);
        $scope.product.lat  = position.coords.latitude;
        $scope.product.long = position.coords.longitude;

        marker.setPosition(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));

    });
/*
    google.maps.event.addListener(marker, 'dragend', function() {
        $scope.$apply(function(){
          //Stop listening changes
          watch.clearWatch();
          var pos = marker.getPosition();
          console.log(pos);
          $scope.product.lat  = pos.A;
          $scope.product.long = pos.F;
        });
    });
*/

    //document.addEventListener("deviceready", function () {

    $scope.takePicture = function() {
          var options = {
              quality : 75,
              destinationType : Camera.DestinationType.DATA_URL,
              sourceType : Camera.PictureSourceType.CAMERA,
              allowEdit : true,
              encodingType: Camera.EncodingType.JPEG,
              popoverOptions: CameraPopoverOptions,
              targetWidth: 500,
              targetHeight: 500,
              saveToPhotoAlbum: false
          };
          $cordovaCamera.getPicture(options).then(function(imageData) {
              //syncArray.$add({image: imageData}).then(function() {
              //    alert("Image has been uploaded");
              //});
              console.log(imageData);
              $scope.product.photo = imageData;

          }, function(error) {
              console.error(error);
          });
      }
    //}, false);

    $scope.createTienda = function() {
      var productRef =  $rootScope.refirebase.child("Tienda").push($scope.tienda);
      var productId = productRef.key();
      console.log(productId);
      $state.go('tab.vender');
    }


})
    


.controller('SignInCtrl', ['$scope', '$rootScope', '$window', '$localstorage' , '$ionicUser', 
  function ($scope, $rootScope, $window, $localstorage, $ionicUser) {
     //check session
     //$rootScope.checkSession();
     $scope.user = {
        email: "",
        password: ""
     };


     $scope.validateUser = function () {
        $rootScope.show('Please wait.. Authenticating');
        var email = this.user.email;
        var password = this.user.password;
        if (!email || !password) {
           $rootScope.notify("Please enter valid credentials");
           return false;
        }
        function authHandler(error, authData) {
          if (error) {
                $rootScope.hide();
                if (error.code == 'INVALID_EMAIL') {
                  $rootScope.notify('Invalid Email Address');
                }
                else if (error.code == 'INVALID_PASSWORD') {
                  $rootScope.notify('Invalid Password');
                }
                else if (error.code == 'INVALID_USER') {
                  $rootScope.notify('Invalid User');
                }
                else {
                  $rootScope.notify('Oops something went wrong. Please try again later');
                }
              }
            else {
              $rootScope.hide();
              console.log(authData);
              $rootScope.token = authData.token;
              $localstorage.set('token', authData.token);
              //console.log($localstorage.get('token', authData.token));
              //console.log($window.localStorage);

              $ionicUser.identify({
                user_id: authData.uid,
                email: email              
              }).then(function() {
                console.log("Success identify User");
              }, function(err) {
                  console.log("Error identify User");
                  console.log(err);
              });;
              $window.location.href = ('#/tabs/funbuy');
          }
        }
        $rootScope.refirebase.authWithPassword({
          email    : email,
          password : password
        }, authHandler);
     }
  }
])

 .controller('SignUpCtrl', [
    '$scope', '$rootScope',  '$window',
    function ($scope, $rootScope, $window) {
      
      $scope.user = {
        email: "",
        password: ""
      };

      $scope.createUser = function () {
 
		var ref = new Firebase("https://amber-inferno-4658.firebaseio.com");


        if (!$scope.user.email || !$scope.user.password) {
          $rootScope.notify("Please enter valid credentials");
          return false;
        }
 
        $rootScope.show('Please wait.. Registering');

        $rootScope.refirebase.createUser($scope.user, function (error, user) {
          if (!error) {
          	console.log(user);
            $rootScope.hide();
            $rootScope.refirebase.child("users").child(user.uid).set({
              provider: 'password',
              email: $scope.user.email
            });
            //$rootScope.token = user.token;
            $window.location.href = ('#/');
          }
          else {
            $rootScope.hide();
            if (error.code == 'INVALID_EMAIL') {
              $rootScope.notify('Invalid Email Address');
            }
            else if (error.code == 'EMAIL_TAKEN') {
              $rootScope.notify('Email Address already taken');
            }
            else {
              $rootScope.notify('Oops something went wrong. Please try again later');
            }
          }
        });
      }
    }
  ])


.controller('AccountCtrl', function($scope, $rootScope, $state) {
  if (!$rootScope.userSignedIn()){
  	$state.go('sign-in');
  }
  $scope.settings = {
    enableFriends: true
  };
})

.controller('MapCtrl', function($scope, $rootScope, $state) {


})


.controller('ComprarCtrl', function($scope, $rootScope, $state) {

 //$state.go('tab-comprar');
})
