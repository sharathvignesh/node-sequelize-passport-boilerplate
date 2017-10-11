const token = require('../models').token;

module.exports = {
  create(req, res) {
    return token
      .create({
        token_id: req.body.token_id,
      })
      .then((token) => res.status(201).send(token))
      .catch((error) => res.status(400).send(error));
  },
}
