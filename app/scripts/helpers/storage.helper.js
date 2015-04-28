'use strict';

var studyLaterStorageService = function($rootScope) {
    var lsName = 'resource';
    var data = localStorage.getItem(lsName) ? JSON.parse(localStorage.getItem(lsName)) : [];

    return {
        get: function() {
            return data;
        },
        add: function(item, cb) {
            this.remove(item.url);
            data.push(item);
            this.save();
            cb(data);
        },
        remove: function(url) {
            var idx = null;
            for (var i = 0; i < data.length; i++) {
                if (data[i].url === url) {
                    idx = i;
                    break;
                }
            }
            if (idx !== null) {
                data.splice(idx, 1);
                this.save();
            }
        },
        save: function() {
            localStorage.setItem(lsName, JSON.stringify(data));
        }
    };
};
