
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'CripTwit' })
};

exports.emision = function(req, res){
  res.render('emision', { title: 'CripTwit Emisión de Mensaje' })
};

exports.recepcion = function(req, res){
  res.render('recepcion', { title: 'CripTwit Recepcion de Mensaje' })
};