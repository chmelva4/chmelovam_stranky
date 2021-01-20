angular.module("chmelovam", ["ngMaterial", "ngRoute", "ngMessages", "ngMeta"])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when("/", {
      templateUrl: "app/views/whoami.html",
      meta: {
        'title': 'O mě',
        'description': 'Kdo jsem a co dělám jako terapeut a kouč'
      }
    })
    .when("/education", {
      templateUrl: "app/views/education.html",
      controller: "educationConroller",
      meta: {
        'title': 'Odbornost a vzdělání',
        'description': 'Školení, výcviky a pracovní praxe v oblasti terapie a koučování'
      }
    })
    .when("/therapy", {
      templateUrl: "app/views/therapy.html",
      meta: {
        'title': 'Terapie a terapeutické služby',
        'description': 'Popis terapeutických služeb, které nabízím'
      }
    })
    .when("/coaching", {
      templateUrl: "app/views/coaching.html",
      meta: {
        'title': 'Koučování',
        'description': 'Popis koučování a koučovacích služeb'
      }
    })
    .when("/conditions", {
      templateUrl: "app/views/conditions.html",
      meta: {
        'title': 'Podmínky vzájemné spolupráce',
        'description': 'Práva a povinnosti mezi terapeutem (koučem) a klientem'
      }
    })
    .when("/support", {
      templateUrl: "app/views/support.html",
      meta: {
        'title': 'Podporuji',
        'description': 'Neziskové organizace, které podporuji svojí prací'
      }
    })
    .when("/contact", {
      templateUrl: "app/views/contact.html",
      meta: {
        'title': 'Kontakt',
        'description': 'Kontakt a adresa mého terapeutického pracoviště'
      }
    })

    $locationProvider.html5Mode(true);
  })
  .config(function($mdThemingProvider) {
    // Use that theme for the primary intentions
    $mdThemingProvider.theme('default')
      .primaryPalette('indigo')
      .accentPalette('light-green');
  })
  .config(function(ngMetaProvider) {
    ngMetaProvider.useTitleSuffix(true)
    ngMetaProvider.setDefaultTitleSuffix(" | Martina Chmelová terapeut a certifikováný kouč")
  })
  .run(['ngMeta', function(ngMeta) {
    ngMeta.init();
  }]);
