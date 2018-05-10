 angular.module('testApp', ['ui.router'])
     .config(Router);

 function Router($locationProvider, $stateProvider, $urlRouterProvider) {
     $locationProvider.html5Mode(true);
     // hashbang fall back for older browsers
     $locationProvider.hashPrefix = '!';
     $stateProvider.state('home', {
         url: '/',
         templateUrl: 'partials/_test.html'
     });
     $urlRouterProvider.otherwise('/');
 }