angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.questions', {
    url: '/page5',
    views: {
      'tab4': {
        templateUrl: 'templates/questions.html',
        controller: 'questionsCtrl'
      }
    }
  })

  .state('tabsController.profile', {
    url: '/page6',
    views: {
      'tab1': {
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl'
      }
    }
  })

  .state('login', {
    url: '/page7',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signUp', {
    url: '/page8',
    templateUrl: 'templates/signUp.html',
    controller: 'signUpCtrl'
  })

  .state('tabsController.settings', {
    url: '/page9',
    views: {
      'tab5': {
        templateUrl: 'templates/settings.html',
        controller: 'settingsCtrl'
      }
    }
  })

  .state('loveWish', {
    url: '/page10',
    templateUrl: 'templates/loveWish.html',
    controller: 'loveWishCtrl'
  })

  .state('tabsController.match', {
    url: '/page11',
    views: {
      'tab3': {
        templateUrl: 'templates/match.html',
        controller: 'matchCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page10')

  

});