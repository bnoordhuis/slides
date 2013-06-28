var Writable = require('stream').Writable;

// splice data into two target streams
function SpliceStream() {
  this.__proto__ = Writable.call(this);
  this._write = function(chunk, encoding, done) {
    process.stdout.write(chunk);
    process.stderr.write(chunk);
    done();
  };
}

if (module.parent)
  module.exports = SpliceStream;
else
  process.stdin.pipe(new SpliceStream);
