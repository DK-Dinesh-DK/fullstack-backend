const express = require("express");
const musicRouter = express.Router();

const { collection, CollectionswithSongs } = require("./sampledata");

musicRouter.get("/collections", (req, res) => {
  res.send({ collection, message: "Here Your Data", status: 200 });
});

musicRouter.get("/collections/:id", (req, res) => {
  const { id } = req.params;
  const list = CollectionswithSongs?.filter((i) => i.id === Number(id));

  res.send({ list, message: "Here Your Data", status: 200 });
});

module.exports = musicRouter;
