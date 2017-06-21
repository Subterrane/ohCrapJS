"use strict";
var curry = function (fn) {
    var fargs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        fargs[_i - 1] = arguments[_i];
    }
    return function () {
        var gargs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            gargs[_i] = arguments[_i];
        }
        return fn.apply(void 0, fargs.concat(gargs));
    };
};
var logger = function (level, obj) { return console[level](obj); };
var ohCrap = curry(logger, 'error');
var ohDear = curry(logger, 'warn');
var meh = curry(logger, 'log');
