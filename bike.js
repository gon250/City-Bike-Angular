(function(){
  var app = angular.module('bikeApp', []);

  app.controller('BikeController', [ '$http','$scope', function($http, $scope){
    $scope = this;

    $http.get('http://api.citybik.es/v2/networks').success(function(data){
      $scope.places = data.networks;
    });
  }]);

  //TODO: Crear Rutas o vistas para dirigir a una nueva vista
  app.controller('CompanyController', ['$scope', '$http', function($scope, $http){
    
    $scope.GetDetails = function(id){
      $http.get('http://api.citybik.es/v2/networks' + id).success(function(data){
        $scope.details = data;
      });
    };

  }])

})();