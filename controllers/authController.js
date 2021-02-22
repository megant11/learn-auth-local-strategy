const { User } = require("../models");
// const passport = require("../lib/passport");

module.exports = {
  register: (req, res, next) => {
    //manggil static method register
    User.register(req.body)
      .then(() => {
        res.json({status: 'Berhasil Register'});
      })
      .catch((err) => next(err));
  }
}
