// MODULE  
var hotelApp = angular.module('hotelApp', ['ngRoute', 'ngResource']);

// ROUTES
hotelApp.config(function($routeProvider) {
   
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    })
    
    .when('/results', {
        templateUrl: 'pages/results.html',
        controller: 'resultsController'
    })
    
});


// CONTROLLERS (minification friendly format)
hotelApp.controller('homeController', ['$scope', '$route', function($scope, $route){
        
}]);

hotelApp.controller('resultsController', ['$scope', '$resource', function($scope, $resource){
        
    $scope.hotelApi = $resource("/hotel.json");
    
    $scope.hotelResult = $scope.hotelApi.get();
    
    console.log($scope.hotelResult);
    
}]);











