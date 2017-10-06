var express = require("express");
var app = express();
var bodyParser = require('body-parser');

const username = "username";
const password = "password";
app.use(bodyParser());

app.get('/', (req, res)=> {
      res.contentType("text/plain");
      res.send("Hello World");
});

app.get('/querystring', (req, res)=> {
    res.contentType("text/plain");
    res.send(req.query.id);
});

app.post('/', (req, res)=> {
  res.send(req.body);
});

app.post('/signin', (req, res)=> {
  var _username = req.body.username;
  var _password = req.body.password;
  if(_username === username && _password === password){
    res.sendStatus(200);
  }
  else{
    res.sendStatus(401);
  }
});


app.listen(3000, ()=> {
    console.log('App listening on port 3000!');
  });
