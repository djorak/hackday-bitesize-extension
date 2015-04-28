'use strict';

angular.module('studylater').controller('MainController', function($scope, $timeout, StorageService) {
    $scope.resources = StorageService.get();

    $scope.removeResource = function(url) {
        $timeout(function() {
            StorageService.remove(url);
            $scope.resources = StorageService.get();
        }, 0);
    };

    $scope.refresh = function() {
        var url = chrome.tabs.query({
            active: true,
            currentWindow: true
        }, function(tab) {
            var storageService = new studyLaterStorageService();
            storageService.add({
                    title: tab[0].title,
                    url: tab[0].url
                },
                function(resources) {
                    $timeout(function() {
                        $scope.resources = resources;
                    }, 0);
                }
            );
        });
    };
});
