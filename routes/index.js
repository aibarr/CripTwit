
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
  res.render('recepcion', { title: 'CripTwit Recepción de Mensaje' })
};

exports.emisionecc = function(req, res){
  res.render('emisionecc', { title: 'CripTwit Emisión de Mensaje ECC' })
};

exports.recepcionecc = function(req, res){
  res.render('recepcionecc', { title: 'CripTwit Recepción de Mensaje ECC' })
};