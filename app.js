var express = require('express');

var app = express();
app.set('port', (process.env.PORT || 3000));
app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});
app.get('/patient-case', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(app.get('port'));
console.log('Listening on port', app.get('port'));
