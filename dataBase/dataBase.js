const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://newUser-45:j5xgM7UaTxqh2EbJ@cluster0.kvrf7rk.mongodb.net/?appName=Cluster0";

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
