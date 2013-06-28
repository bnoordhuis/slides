var RandomWordStream = require('./readable');
var CapsLockStream = require('./transformer');
var SpliceStream = require('./writable');

(new RandomWordStream(8)).pipe(new CapsLockStream)
                         .pipe(new SpliceStream);
