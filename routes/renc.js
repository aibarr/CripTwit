//renc.js

exports.emisionecc = function(req, res){
  res.render('emisionecc', { title: 'CripTwit Emisión de Mensaje ECC' })
};

exports.recepcionecc = function(req, res){
  res.render('recepcionecc', { title: 'CripTwit Recepción de Mensaje ECC' })
};