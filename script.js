(function(){
var app = angular.module("gitHubViewer",[]);

var MainController = function($scope, $http)
{
  var onUserCompletion = function(response)
  {
    $scope.user = response.data;
  };
  
  var onError = function(reason)
  {
    $scope.error = reason;
  };
  
  $http.get("https://api.github.com/users/radhikamohan")
    .then(onUserCompletion, onError);
};

app.controller("MainController",MainController);
  
}());

