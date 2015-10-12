(function(){
var app = angular.module("gitHubViewer",[]);

var MainController = function($scope, $http)
{
    $scope.username = "angular";
    $scope.message = "GitHub Viewer";
  var onUserCompletion = function(response)
  {
      $scope.user = response.data;
      $http.get($scope.user.repos_url).then(onRepos, onError);
  };

  var onRepos = function (response) {
      $scope.repos = response.data;
  };
  
  var onError = function(reason)
  {
    $scope.error = "Couldn't fetch the data";
  };
  
  $scope.search = function()
  {
      $http.get("https://api.github.com/users/"+ $scope.username)
    .then(onUserCompletion, onError);
  };
};
app.controller("MainController",MainController);  
}());

