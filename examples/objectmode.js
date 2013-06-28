var Readable = require('stream').Readable;
var Writable = require('stream').Writable;

function Source(n) {
  this.__proto__ = Readable.call(this, { objectMode: true });
  this._count = 0;
  this._read = function(size) {
    if (++this._count === n)
      this.push(null);
    else
      this.push({ count: this._count });
  };
}

function Sink() {
  this.__proto__ = Writable.call(this, { objectMode: true });
  this._write = function(obj, _, done) {
    console.log(obj);
    done();
  };
}

(new Source(4)).pipe(new Sink);
