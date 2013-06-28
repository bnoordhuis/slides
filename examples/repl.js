// an online REPL
function repl(conn) {
  require('repl').start({ input: conn, output: conn });
}
require('net').createServer(repl).listen(8000);
