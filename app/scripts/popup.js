'use strict';

angular.module('studylater', []);

document
    .querySelector('.learning-resources__add-button')
    .addEventListener('click', function () {
        chrome.tabs.getCurrent(function (tab) {
            var title = tab.title;
            var url = tab.url;
            console.log(title + ': ' + url);
        });
    }, false);
