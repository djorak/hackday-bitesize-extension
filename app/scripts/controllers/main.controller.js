'use strict';

angular.module('studylater').controller('MainController', function ($scope, StorageService) {
    $scope.resources = StorageService.get();
    $scope.removeResource = function (url) {
        StorageService.remove(url);
        $scope.resources = StorageService.get();
        if (!$scope.$$phase) {
            $scope.$apply();
        }
    };
});
