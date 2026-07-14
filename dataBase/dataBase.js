const { MongoClient } = require("mongodb");

const uri =
  "mongodb://atlas-sql-6321d1724ee99f3187b534ef-4g2is.a.query.mongodb.net/MyDatabase?ssl=true&authSource=admin";

const client = new MongoClient(uri);
const connectionUtils = {
  init: () => {
    console.log("Initiating Database connection...");
    client
      .connect()
      .then(async (e) => {
        console.log(`🚀 Database connected successfully...`);
      })
      .catch((err) => {
        console.log("ERROR:", err);
      });
  },
  terminate: () => client.close(),
};

module.exports = { client, connectionUtils };
