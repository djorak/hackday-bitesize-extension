'use strict';

chrome.runtime.onInstalled.addListener(function(details) {
    console.log('previousVersion', details.previousVersion);
});

chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    if (request) {
        var storageService = new studyLaterStorageService();
        if (request.action === 'add') {
            storageService.add(request.data);
        }
    }
});
