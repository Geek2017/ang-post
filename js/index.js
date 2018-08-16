var app = angular.module("api", []);

var base64="";

app.controller("getjson", ["$scope", "$http", function($scope, $http) {
  $http.post("https://api.myjson.com/bins/1fgnbg"+base64).
  success(function(emoy) {
    $scope.data = emoy;
    console.log($scope.data);

    $scope.quantity=2;
  });
}]);