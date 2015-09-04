
// Socket.io server listens to our app
var io = require('socket.io').listen(8080);
var ioclient = require('socket.io-client');

function errorfunc(){
  throw new Error("io world")
}

io.on('connection', function(socket) {
  console.log('connection');
  socket.on('test', errorfunc);
});

client = ioclient.connect('http://localhost:8080');
client.on('connect', function(){
  console.log("connect");
  client.emit('test', true)
});
