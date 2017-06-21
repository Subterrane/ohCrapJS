let curry = (fn, ...fargs) => (...gargs) => fn(...fargs, ...gargs);
let logger = (level, obj) => console[level](obj);
let ohCrap = curry(logger, 'error');
let ohDear = curry(logger, 'warn');
let meh = curry(logger, 'log');
