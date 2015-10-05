// DIRECTIVES
hotelApp.directive("hotelInfo", function(){
   return {
       restrict: 'E',
       templateUrl: 'directives/hotelInfo.html',
       replace: true,
       scope: {
           hotelObject: "="
       }
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
       scope: {
           hotelDescription: "@"
       }
   } 
});

hotelApp.directive("hotelOffers", function(){
   return {
       restrict: 'E',
       templateUrl: 'directives/hotelOffers.html',
       replace: true,
       scope: {
           hotelOffers: "="
       }
   } 
});

hotelApp.directive("hotelReviews", function(){
   return {
       restrict: 'E',
       templateUrl: 'directives/hotelReviews.html',
       replace: true,
       scope: {
           hotelReviews: "="
       }
   } 
});
