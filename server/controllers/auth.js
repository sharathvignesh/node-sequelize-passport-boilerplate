const model = require('../models');

exports.list = function(token, cb) {
  console.log("listt");
  model.token.findAll({
      attributes: ['token_id']
    })
    .then((body)=> {
      return cb(null, body[0].dataValues);
    })
}
