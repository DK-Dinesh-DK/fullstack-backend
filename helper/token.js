const jwt = require("jsonwebtoken");

function verifytoken(req, res, next) {

  jwt.verify(req.header("token"), "verySecretValue", function (err, authData) {
    if (err) {
      console.log("not ok");
      res.send({
        message: "Login Expired",
        status: 401,
      });
    } else {
      next()
    }
  });
}

module.exports = { verifytoken };
