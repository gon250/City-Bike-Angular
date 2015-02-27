var bikeControllers = angular.module('bikeControllers', []);
bikeControllers.controller('CitiesCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('http://api.citybik.es/v2/networks').success(function(data){
      $scope.places = data.networks;
    });
  }]);

bikeControllers.controller('DetailsCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
  $http.get('http://api.citybik.es/v2/networks/' + $routeParams.cityId).success(function(data){
      $scope.city = data.network;
    });
  }]);
