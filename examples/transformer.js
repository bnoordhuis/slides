var Transform = require('stream').Transform;

function CapsLockStream() {
  this.__proto__ = Transform.call(this);
  this._transform = function(data, encoding, done) {
    for (var i = 0; i < data.length; i++)
      if (data[i] >= 97 && data[i] <= 122)
        data[i] &= ~32;
    this.push(data);
    done();
  };
}

if (module.parent)
  module.exports = CapsLockStream;
else
  process.stdin.pipe(new CapsLockStream)
               .pipe(process.stdout);
