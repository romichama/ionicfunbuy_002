// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'firebase', 'ionic.service.core'])

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})






.run(function($ionicPlatform, $ionicLoading, $rootScope, $ionicLoading, $window, $localstorage) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }


    $rootScope.token = null;


    $rootScope.refirebase = new Firebase("https://amber-inferno-4658.firebaseio.com");

    //var authRef = new Firebase($rootScope.baseUrl);
    //$rootScope.auth = $firebaseAuth(authRef);
 
    $rootScope.show = function(text) {
      $rootScope.loading = $ionicLoading.show({
        template: text ? text : 'Loading..',
        animation: 'fade-in',
        showBackdrop: true,
        maxWidth: 200,
        showDelay: 0
      });
    };
 

    $rootScope.hide = function() {
      $ionicLoading.hide();
    };
 
    $rootScope.notify = function(text) {
      $rootScope.show(text);
      $window.setTimeout(function() {
        $rootScope.hide();
      }, 1999);
    };
 
    $rootScope.logout = function() {
      $rootScope.refirebase.unauth();
      $rootScope.checkSession();
    };

    $rootScope.show = function(text) {
      $rootScope.loading = $ionicLoading.show({
        template: text ? text : 'Loading..',
        animation: 'fade-in',
        showBackdrop: true,
        maxWidth: 200,
        showDelay: 0
      });
    };

    $rootScope.authHandler = function(error, authData) {
      console.log(authData);
      if (error) {
        $rootScope.token = null;
      }
      else {
          $rootScope.token = authData.token;
          $localstorage.set('token', authData.token);
      }
    }
    $rootScope.initSession = function(){
      var token = '';//$localstorage.get('token');
      console.log(token);

      if(token){
        $rootScope.refirebase.authWithCustomToken(token, $rootScope.authHandler);
      }
    }
    //$rootScope.initSession();


    $rootScope.userSignedIn = function(){
        return($rootScope.token != null)
    }

    $rootScope.checkSession = function() {
      //var authData = $rootScope.refirebase.getAuth();
      //if (authData) {
      if(!$rootScope.token){
        $state.go('sign-in');
        //$window.location.href = '#/';
        //console.log("User " + authData.uid + " is logged in with " + authData.provider);
      } 
      //else {
        //$ionicHistory.nextViewOptions({
        //  disableAnimate: true,
        //  disableBack: true
        //});
        //$state.go('sign-in');
      //}
    }
  });
})



.config(function($stateProvider, $urlRouterProvider, $ionicAppProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  

  $ionicAppProvider.identify({
    // The App ID for the server
    app_id: '69942b75',
    // The API key all services will use for this app
    api_key: '1f4f8c8bcc69ab07a531d02e9ec540bb552c00bc0c15c5e',

    api_write_key: 'fedafd58e4c5b1907be4eb615ed814ba630c2dde3a9d9f1fc2da0a10010560ff3875ba3cf6360266ef5bb4ac2a45dd974b3791534e06270ca967bc5b4b449a7a7feb16e7a9cd2542c944220d5d51d57891adf5700fed37040a32826f93bf98a434cb023313ef02b0d65d104c6c684a2c522023454e03008f524a282fc0b11e2b9a1447d24c251723f5c4555c4c4fe347'
    // Your GCM sender ID/project number (Uncomment if using GCM)
    //gcm_id: 'YOUR_GCM_ID'
  });


  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // funbuy
.state('tab.funbuy', {
    url: '/funbuy',
    views: {
      'tab-funbuy': {
        templateUrl: 'templates/tab-funbuy.html',
  //      controller: 'DashCtrl'
      }
    }
  })

//



// VENDER 

 .state('tab.vender', {
      url: '/vender',
      views: {
        'tab-vender': {
          templateUrl: 'templates/tab-vender.html',
      //    controller: 'DashCtrl'
     
        }
      }
    })
 .state('tab.registrar', {
      url: '/registrar',
      views: {
        'tab-vender': {
          templateUrl: 'templates/vender/add-tiemda-vendedor.html',
          controller: 'TiendaFormCtrl'
        }
      }
    })


.state('tab.vendedor', {
    url: '/vendedor',
    views: {
      'tab-vender': {
        templateUrl: 'templates/vender/tab-vendedor.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.vendedor-detail', {
    url: '/dash/:productId',
    views: {
      'tab-vender': {
        templateUrl: 'templates/vender/tab-vendedor-detail.html',
        controller: 'DashDetailCtrl'
      }
    }
  })

  .state('tab.vendedor-form', {
    url: '/dash-form',
    views: {
      'tab-vender': {
        templateUrl: 'templates/vender/tab-vendedor-form.html',
        controller: 'DashFormCtrl'
      }
    }
  })



.state('detail-in', {
    url: '/detail-in',
    templateUrl: 'templates/vender/add-ofertas-producto.html',
    controller: 'InOfertasCtrl'
  })

.state('tab.ofertas-detail-0', {
      url: '/ofertas-detail-0',
      views: {
        'tab-vender': {
          templateUrl: 'templates/vender/ofertas-detail.html',
          controller: 'oferta0Ctrl'
        }
      }
    })
.state('tab.ofertas-detail-1', {
      url: '/ofertas-detail-1',
      views: {
        'tab-vender': {
          templateUrl: 'templates/vender/ofertas-detail1.html',
          controller: 'oferta1Ctrl'
        }
      }
    })
.state('tab.ofertas-detail-2', {
      url: '/ofertas-detail-2',
      views: {
        'tab-vender': {
          templateUrl: 'templates/vender/ofertas-detail2.html',
          controller: 'oferta2Ctrl'
        }
      }
    })
.state('tab.ofertas-detail-3', {
      url: '/ofertas-detail-3',
      views: {
        'tab-vender': {
          templateUrl: 'templates/vender/ofertas-detail3.html',
          controller: 'oferta3Ctrl'
        }
      }
    })
.state('tab.ofertas-detail-4', {
      url: '/ofertas-detail-4',
      views: {
        'tab-vender': {
          templateUrl: 'templates/vender/ofertas-detail4.html',
          controller: 'oferta4Ctrl'
        }
      }
    })



// comprar 

 .state('tab.comprar', {
      url: '/comprar',
      views: {
        'tab-comprar': {
          templateUrl: 'templates/tab-comprar.html',
      //    controller: 'DashCtrl'
     
        }
      }
    })

  .state('tab.comprar-l', {
      url: '/comprar-l',
      views: {
        'tab-comprar': {
          templateUrl: 'templates/comprar/tab-lista.html',
         controller: 'ListaCtrl'
        }
      }
    })

  .state('tab.add-lista', {
      url: '/add-lista',
      views: {
        'tab-comprar': {
          templateUrl: 'templates/comprar/add-lista.html',
          controller: 'ListaFormCtrl'
        }
      }
    })
.state('tab.edit-lista', {
      url: '/edit-lista/:chatId',
      views: {
        'tab-comprar': {
          templateUrl: 'templates/comprar/add-lista.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

//-----------------------

// el  producto
    .state('tab.productos', {
      url: '/productos/:listaId',
      views: {
        'tab-comprar': {
          templateUrl: 'templates/comprar/lista-detail.html',
          controller: 'ListaDetailCtrl'
        }
      }
    })

  .state('tab.add-producto', {
      url: '/add-producto/:listaId',
      views: {
        'tab-comprar': {
          templateUrl: 'templates/comprar/add-producto.html',
          controller: 'ItemFormCtrl'
        }
      }
    })

.state('tab.edit-producto', {
      url: '/edit-producto/:chatId',
      views: {
        'tab-comprar': {
          templateUrl: 'templates/comprar/add-producto.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

.state('tab.show-producto', {
      url: '/show-producto/:itemId',
      views: {
        'tab-comprar': {
          templateUrl: 'templates/comprar/show-producto.html',
          controller: 'ItemDetailCtrl'
        }
      }
    })

// comprando

.state('tab.comprando', {
      url: '/comprando',
      views: {
        'tab-comprar': {
          templateUrl: 'templates/comprar/tab-lista-c.html',
         controller: 'ListaCtrl'
        }
      }
    })

.state('tab.c-comprando', {
      url: '/c-comprando/:listaId',
      views: {
        'tab-comprar': {
          templateUrl: 'templates/comprar/lista-detail-c.html',
          controller: 'ListaDetailCtrl'
        }
      }
    })


.state('tab.comprando-producto', {
      url: '/comprando-producto/:itemId',
      views: {
        'tab-comprar': {
          templateUrl: 'templates/comprar/show-producto-c.html',
          controller: 'ComprandoItemDetailCtrl'
        }
      }
    })

// compras

.state('tab.decompras', {
      url: '/decompras',
      views: {
        'tab-comprar': {
          templateUrl: 'templates/comprar/c-lista.html',
          controller: 'DashCtrl'
        }
      }
    })

//------------------------

  .state('sign-in', {
    url: '/sign-in',
    templateUrl: 'templates/registrar/sign-in.html',
    controller: 'SignInCtrl'
  })

  .state('tab.sign-up', {
    url: '/sign-up',
    views: {
      'tab-funbuy': {
        templateUrl: 'templates/registrar/sign-up.html',
        controller: 'SignUpCtrl'
      }
    }
  })

  

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  })
  
  .state('tab.map', {
    url: '/map',
    views: {
      'tab-map': {
        templateUrl: 'templates/tab-map.html',
        controller: 'MapCtrl'
      }
    }
  });


  


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/funbuy');




});


