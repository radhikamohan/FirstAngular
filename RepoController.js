var app = angular.module("gitHubViewer");

var RepoController = function ($scope, $http, $routeParams, $log) {

    $scope.userName = $routeParams.username;
    $scope.repoName = $routeParams.reponame;
    $scope.openIssues = 0;
    url = "https://api.github.com/repos/" + $scope.userName + "/" + $scope.repoName;
    $log.log("Getting: "+url);
    

    var onError = function (reason) {
        $scope.error = "Couldn't fetch the data";
    };

    var getOpenIssues = function (response) {
        $scope.openIssues = response.data.open_issues_count;
        $http.get(response.data.contributors_url).then(getContributors, onError);
    };

    var getContributors = function (response) {
        $scope.contributors = response.data;
    };

    $http.get(url).then(getOpenIssues, onError);
};


app.controller("RepoController", RepoController);
