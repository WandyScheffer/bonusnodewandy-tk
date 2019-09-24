var express = require('express');
var app = express();

app.get('*', (req, res, next) => {
  if (req.headers['x-forwarded-proto'] != 'https') {

    // checa se o header é HTTP ou HTTPS

    res.redirect("https://" + req.headers.host + req.url);

    // faz o redirect para HTTPS

  } else {
    next();

    // segue com a sequência das rotas

  }
});

app.get('/', function (req, res) {
  var date = new Date();
  var horas = date.getHours();
  var horasPC = horas - 3;
  if (horas - 3 < 0) {
    horasPC = horas + 21;
  }
  var minutos = date.getMinutes();
  var segundo = date.getSeconds();
  res.send('<h2>Hello World!</h2> hora servidor:' + horas + ':' + minutos + ':' + segundo + '<br>hora computador:' + horasPC + ':' + minutos + ':' + segundo);
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
