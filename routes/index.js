const express = require("express");
const routes = express.Router();

console.log("routess");

routes.use("/user", require("./userAuthentication"));
routes.use("/table", require("./tabledata"));
routes.use("/user-table",require("./userList"))
routes.use("/cinema-qube",require("./music"))

module.exports = routes;
