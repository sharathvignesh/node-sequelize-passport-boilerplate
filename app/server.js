let express = require("express");
let app = express();
let bodyParser = require('body-parser');
var passport = require('passport');
var Strategy = require('passport-http-bearer').Strategy;
var db = require('../db')
const signupController = require('../server/controllers').signup;

passport.use('bearer', new Strategy(
  function(token, cb) {
    console.log("coming here");
    db.users.findByToken(token, function(err, user) {
      if (err) { return cb(err); }
      if (!user) { return cb(null, false); }
      console.log(cb(null, user));
      return cb(null, user);
    });
  }));

const username = "username";
const password = "password";
app.use(bodyParser());


// app.get('/', (req, res)=> {
//       passport.authenticate('bearer', { session: false }),
//       res.contentType("text/plain");
//       res.send("Hello World");
// });

app.get('/',
  passport.authenticate('bearer', { session: false }),
  function(req, res) {
    res.json(req.user);
  });

app.get('/querystring', (req, res)=> {
    res.contentType("text/plain");
    res.send(req.query.id);
});

app.post('/', (req, res)=> {
  res.send(req.body);
});

app.post('/signup', signupController.create);

app.post('/signin', (req, res)=> {
  let _username = req.body.username;
  let _password = req.body.password;
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

module.exports = app;
