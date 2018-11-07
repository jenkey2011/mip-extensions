/**
 * @file mip-story-storage.js
 * @desc 本地存储
 * @author <wangqizheng01@baidu.com>
 */

define(function (require) {
    var prefix = require('./mip-story-config').STORY_PREFIX;
    var storage = window.sessionStorage;

    var get = function (key) {
        var prefixKey = prefix + key;
        var localValue = storage.getItem(prefixKey);
        try {
            return JSON.parse(localValue);
        } catch (e) {
            return localValue;
        }
    };

    var set = function (key, value) {
        var prefixKey = prefix + key;
        var localValue;
        try {
            localValue = JSON.stringify(value);
        } catch (e) {
            localValue = value;
        }
        storage.setItem(prefixKey, localValue);
    };

    var remove = function (key) {
        var prefixKey = prefix + key;
        storage.removeItem(prefixKey);
    };

    return {
        get: get,
        set: set,
        remove: remove
    };
});
