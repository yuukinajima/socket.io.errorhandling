var io = require('socket.io').listen(8080);

process.on('uncaughtException', function(error){
  console.log("uncaughtException!!!", error)
})

function errorfunc(){ throw new Error("io world") }

io.on('connection', function(socket) {
  console.log('connection');
  socket.on('test', errorfunc);
});

client = require('socket.io-client')('http://localhost:8080')
.on('connect', function(){
  console.log("connect");
  client.emit('test', true)
});
