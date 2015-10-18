
    var app = angular.module("gitHubViewer");

    var UserController = function ($scope, $http, $routeParams) {
        $scope.username = $routeParams.username;
        var onUserCompletion = function (response) {
            $scope.user = response.data;
            $http.get($scope.user.repos_url).then(onRepos, onError);
        };

        var onRepos = function (response) {
            $scope.repos = response.data;
        };

        var onError = function (reason) {
            $scope.error = "Couldn't fetch the data";
        };

        $http.get("https://api.github.com/users/" + $scope.username)
        .then(onUserCompletion, onError);
    };

    app.controller("UserController", UserController);

