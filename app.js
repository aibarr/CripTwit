
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

var participantes = 0;
var emisor = {
  soquete : null,
  hay : 0};
var receptor = {
  soquete : null,
  hay : 0};

io.sockets.on('connect', function(socket){
  console.log('Alguien se ha conectado');

  socket.rol = 'nada';

  //cuando llegue un emisor
  socket.on('enviar', function(data, callback){
    //Digo que sí hay un emisor presente
    console.log('Tenemos al emisor');
    emisor.soquete = socket;
    emisor.hay = 1;
    socket.rol = 'emisor';
    //Si hay un receptor
    if(receptor.hay){
      //aviso que sí hay quien reciba
      socket.receptor = receptor.soquete;
      callback(true);
      //Y despierto al receptor
    }else{
      //Sino, aviso que no hay quien reciba
      callback(false);
    }
  });

  socket.on('recibir', function(data, callback){
    //digo que sí hay un receptor presente
    receptor.soquete = socket;
    receptor.hay = 1;
    socket.rol = 'receptor';
    //Si hay un emisor
    if(emisor.hay){
      //aviso que sí hay quien envíe
      socket.emisor = emisor.soquete;
      callback(true);
      //Y despierto al emisor
    }else{
      //Sino, aviso que no hay quien reciba
      callback(false);
    }
  });

  //Cuando llegue un mensaje del emisor
  socket.on('mensaje', function(data, callback){
    //Le envío el mensaje al receptor
    socket.receptor.emit('mensaje', data);
  });

  //Registro cuando un usuario se salio del servidor
  socket.on('disconnect', function(){
    switch(socket.rol){
      case 'emisor':
        emisor = false;
        break;
      case 'receptor':
        receptor = false;
        break;
      case 'nada':
        //doNothing
        break;
      default:
        //doNothing
        break;
    }

    console.log('Alguien se ha desconectado');
  });

});
