const express = require("express");
const userListRouter = express.Router();
const { verifytoken } = require("../helper/token");
const { CheckAdmin } = require("../helper/checkAdmin");
const { client } = require("../dataBase/dataBase");
let db = client.db("MyDatabase");
let { ObjectId } = require("mongodb");

userListRouter.post("/user-list", verifytoken, CheckAdmin, (req, res) => {
  db.collection("UserList")
    .find({ isAdmin: { $ne: true } })
    .toArray()
    .then((items) => {
      return res
        .status(200)
        .json({ message: "Here Your User List", data: items });
    })
    .catch((err) => {
      return res.status(500).json({ error: err });
    });
});
userListRouter.post(
  "/user-mode-update",
  verifytoken,
  CheckAdmin,
  (req, res) => {
    console.log("Body", req.body.id);
    db.collection("UserList")
      .updateOne(
        { _id: ObjectId(req.body.id) },
        {
          $set: {
            blocked: req.body.blocked,
          },
        }
      )
      .then((items) => {
        return res.status(200).json({ message: "User Mode Changed" });
      })
      .catch((err) => {
        return res.status(500).json({ error: err });
      });
  }
);

module.exports = userListRouter;
