require(['angular', 'js/controllers','angularRoute'], function(angular){
  var bikeApp = angular.module('bikeApp', [
  'ngRoute',
  'bikeControllers'
]);

bikeApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/cities.html',
        controller: 'CitiesCtrl'
      }).
      when('/details/:cityId', {
        templateUrl: 'partials/details.html',
        controller: 'DetailsCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
});