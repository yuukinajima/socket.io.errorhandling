var io = require('socket.io').listen(8080);
var domain = require('domain').create()
domain.on('error', function(error){
  console.log('domain catch exception', error)
});

function errorfunc(){
  domain.run(function(){
    throw new Error("io world")
  })
}

domain.run(function(){
  io.on('connection', function(socket) {
    console.log('connection');
    socket.on('test', errorfunc);
  });
});

var client = require('socket.io-client')('http://localhost:8080')
.on('connect', function(){
  console.log("connect");
  client.emit('test', true)
});
