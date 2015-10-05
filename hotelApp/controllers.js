// CONTROLLERS (minification friendly format)
hotelApp.controller('homeController', ['$scope', '$route', function($scope, $route){
        
}]);

hotelApp.controller('resultsController', ['$scope', '$resource', function($scope, $resource){
        
    $scope.hotelApi = $resource("/hotel.json");
    
    $scope.hotelResult = $scope.hotelApi.get();
    
}]);