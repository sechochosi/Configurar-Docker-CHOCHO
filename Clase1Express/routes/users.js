var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.query);
  var nombre= req.query.nombre 
  res.send('Hola '+ nombre + ' como estas' );
  
});

router.post('/suma', function(req, res, next) {
  console.log(req.body);
  var numero1 = parseFloat(req.body.numero1);
  var numero2 = parseFloat(req.body.numero2);
  var suma = numero1 + numero2;

  res.send('La suma de '+ numero1 + ' más ' + numero2 + ' es igual a ' + suma );
  
});

router.post('/cp', function(req, res, next) {
  console.log(req.body);

  var texto = req.body.texto;
  var numeroDeCaracteres = texto.length;
  res.send('El texto "' + texto + '" contiene ' + numeroDeCaracteres + ' caracteres.');

});

module.exports = router;
