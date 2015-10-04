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


// DIRECTIVES
hotelApp.directive("hotelInfo", function(){
   return {
       restrict: 'E',
       templateUrl: 'directives/hotelInfo.html',
       replace: true,
       
   } 
});

hotelApp.directive("hotelImages", function(){
   return {
       restrict: 'E',
       templateUrl: 'directives/images.html',
       replace: true,
       
   } 
});

hotelApp.directive("hotelDescription", function(){
   return {
       restrict: 'E',
       templateUrl: 'directives/hotelDescription.html',
       replace: true,
       
   } 
});

hotelApp.directive("hotelOffers", function(){
   return {
       restrict: 'E',
       templateUrl: 'directives/hotelOffers.html',
       replace: true,
       
   } 
});

hotelApp.directive("hotelReviews", function(){
   return {
       restrict: 'E',
       templateUrl: 'directives/hotelReviews.html',
       replace: true,
       
   } 
});





