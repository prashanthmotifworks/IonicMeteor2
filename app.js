

if (Meteor.isClient) {
  angular.module('socially', ['angular-meteor','ui.router','ionic','ionic-material' ]);//, 'ionMdInput']);

  //['ionic', 'starter.controllers', 'ionic-material', 'ionMdInput']



angular.module('socially').config(function($urlRouterProvider, $stateProvider, $locationProvider){
 
      $locationProvider.html5Mode(true);
 
      // $stateProvider
      //   .state('parties', {
      //     url: '/parties',
      //     templateUrl: 'parties-list.html',
      //     controller: 'PartiesListCtrl'
      //   })
      //   .state('partyDetails', {
      //     url: '/parties/:partyId',
      //     templateUrl: 'party-details.html',
      //     controller: 'PartyDetailsCtrl'
      //   });
 
      $urlRouterProvider.otherwise("/main");
    })
  

  // angular.module('socially')
  // .controller('PartiesListCtrl', function ($scope, $meteor) {
  //   $scope.parties = $meteor.collection(Parties);
  // })

  .controller('FriendsCtrl', function($scope, $stateParams, $timeout){// ionicMaterialInk, ionicMaterialMotion) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.$parent.setHeaderFab('left');

    // Delay expansion
    $timeout(function() {
        $scope.isExpanded = true;
        $scope.$parent.setExpanded(true);
    }, 300);

    // Set Motion
    ionicMaterialMotion.fadeSlideInRight();

    // Set Ink
    ionicMaterialInk.displayEffect();
});
}