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