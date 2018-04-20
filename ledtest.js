var Gpio = require('onoff').Gpio, led = new Gpio(21,'out');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended : false }));

app.listen(9000, function(){
  console.log('Server running');
});

app.get('/', function(req, res){
  res.send(`
    <h1>LED</h1>
    <form  action="/data" method="post">
      <input type="submit" value="on" name="led">
      <input type="submit" value="off" name="led">
    </form>
    `)
});

app.post('/data', function(req, res){
  var id = req.body.led;
  if(id == 'on'){
    led.writeSync(1);
  } else {
    led.writeSync(0);
  }
});
