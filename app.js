
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes');

var app = module.exports = express.createServer();

var io = require('socket.io')(app);
// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index);
app.get('/emision', routes.emision);
app.get('/recepcion', routes.recepcion);

app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});

//Configurando socket

io.sockets.on('connect', function(socket){
  console.log('Alguien se ha conectado');

  //Registro cuando un usuario se salio del servidor
  socket.on('disconnect', function(){
    console.log('Alguien se ha desconectado');
  });

});
