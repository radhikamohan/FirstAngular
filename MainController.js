var app = angular.module("gitHubViewer");

var MainController = function($scope, $location)
{
  $scope.username = "angular";
  
  $scope.search = function()
  {
      $location.path("/user/" + $scope.username);
  };
};

app.controller("MainController",MainController);  


