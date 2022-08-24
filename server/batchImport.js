const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const { fruits } = require("./data/fruits");
const { veggies } = require("./data/veggies");
const { fineHerbes } = require("./data/fineHerbes");


const batchImportFruits = async () => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("db-name");
    const result = await db.collection("fruits").insertMany(
      fruits
      );
    console.log("result",result)
  } catch (err) {
    console.log(err.stack);
  }
  client.close();
};

const batchImportVeggies= async () => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("db-name");
    const result = await db.collection("veggies").insertMany(veggies);
    console.log("result",result)
  } catch (err) {
    console.log(err.stack);
  }
  client.close();
};
const batchImportFineHerbes = async () => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("db-name");
    const result = await db.collection("fineHerbes").insertMany(fineHerbes);
    console.log("result",result)
  } catch (err) {
    console.log(err.stack);
  }
  client.close();
};

batchImportVeggies();
batchImportFineHerbes();
batchImportFruits();

