var Readable = require('stream').Readable;
var words = require('fs')
  .readFileSync('/usr/share/dict/words', 'utf8')
  .split('\n');

// generates `n` random words
function RandomWordStream(n) {
  this.__proto__ = Readable.call(this);
  this._read = function(size) {
    if (n-- === 0) return this.push(null);  // EOF
    var index = Math.random() * words.length | 0;
    this.push(words[index] + '\n');
  };
}

if (module.parent)
  module.exports = RandomWordStream;
else
  (new RandomWordStream(8)).pipe(process.stdout);
