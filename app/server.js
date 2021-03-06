const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const passport = require('passport');
const Strategy = require('passport-http-bearer').Strategy;
const db = require('../db');
const controller = require('../server/controllers').token;
const authController = require('../server/controllers').auth;
const username = 'username';
const password = 'password';

passport.use('bearer', new Strategy(
  function(token, cb) {
    console.log('coming here');
    db.users.findByToken(token, function(err, user) {
      if (err) { return cb(err); }
      if (!user) { return cb(null, false); }
      console.log(cb(null, user));
      return cb(null, user);
    });
  }));

  passport.use('bearer', new Strategy(
    function(token, cb) {
      console.log('coming here');
      authController.findByToken(token, function(err, user) {
        if (err) { return cb(err); }
        if (!user) { return cb(null, false); }
        console.log(cb(null, user));
        return cb(null, user);
      });
    }));

app.use(bodyParser());

app.get('/',
  passport.authenticate('bearer', { session: false }),
  function(req, res) {
    res.json(req.user);
  });

app.get('/querystring', (req, res)=> {
    res.contentType('text/plain');
    res.send(req.query.id);
});

app.post('/', (req, res)=> {
  res.send(req.body);
});

app.post('/save', controller.create);

app.get('/get_token', controller.list);

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
