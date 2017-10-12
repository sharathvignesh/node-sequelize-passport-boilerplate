const controller = require('../controllers').token;
const authController = require('../controllers').auth;
const passport = require('passport');
const Strategy = require('passport-http-bearer').Strategy;
const username = 'username';
const password = 'password';

passport.use('bearer', new Strategy(
  function(token, cb) {
    authController.list(token, function(err, _token) {
      if(_token.token_id === token){
        return cb(null, "ok")
      }
      else{
        return cb(null, null)
      }
    });
  }));

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send('Welcome to the Todos API!'));

  app.get('/api/get_token',
    passport.authenticate('bearer', { session: false }),
    (req, res)=> {
      res.status(200).send("Authorized")
    });

  app.post('/api/save_token', controller.create);

  app.get('/api/querystring', (req, res)=> {
      res.contentType('text/plain');
      res.status(200).send(req.query.id);
  });

  app.post('/api/signin', (req, res)=> {
    let _username = req.body.username;
    let _password = req.body.password;
    if(_username === username && _password === password){
      res.sendStatus(200);
    }
    else{
      res.sendStatus(401);
    }
  });
};
