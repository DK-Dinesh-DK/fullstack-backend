const jwt = require("jsonwebtoken");
const { client } = require("../dataBase/dataBase");
let db = client.db("MyDatabase");

function CheckAdmin(req, res, next) {
  console.log(req.body.userName);
  if (req.body.userName) {
    db.collection("UserList")
      .findOne({ $or: [{ username: req.body.userName }] })
      .then((result) => {
        if (result.isAdmin) {
          console.log("Yessss Yuo can able edit");
          next();
        }
      })
      .catch((err) => {
        res.send({
          message: "You are not admin access denied",
          status: 410,
        });
      });
  } else {
    res.send({
      message: "UserName Required",
      status: 409,
    });
  }
}

module.exports = { CheckAdmin };
