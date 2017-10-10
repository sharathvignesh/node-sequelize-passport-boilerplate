const user = require('../models').user;

module.exports = {
  create(req, res) {
    return user
      .create({
        username: req.body.username,
        password: req.body.password
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return user
      .all()
      .then(user => res.status(200).send(todos))
      .catch(error => res.status(400).send(error));
  },
};
