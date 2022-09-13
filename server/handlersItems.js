const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
("use strict");

// returns all veggies
const getVeggies = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("db-name");
  const veggies = await db.collection("veggies").find().toArray();
  if (veggies.length) {
    res.status(200).json({ status: 200, data: veggies });
  } else if (veggies.length === 0) {
    res
      .status(404)
      .json({ status: 404, data: veggies, message: "Not found" });
  }
  client.close();
};

// returns all fruits
const getFruits = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("db-name");
  const fruits = await db.collection("fruits").find().toArray();
  if (fruits.length) {
    res.status(200).json({ status: 200, data: fruits });
  } else if (fruits.length === 0) {
    res
      .status(404)
      .json({ status: 404, data: fruits, message: "Not found" });
  }
  client.close();
};

// returns all Fine Herbes
const getFineHerbes = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("db-name");
  const fineHerbes = await db.collection("fineHerbes").find().toArray();
  if (fineHerbes.length) {
    res.status(200).json({ status: 200, data: fineHerbes });
  } else if (fineHerbes.length === 0) {
    res
      .status(404)
      .json({ status: 404, data: fineHerbes, message: "Not found" });
  }
  client.close();
};

module.exports = {
  getVeggies,
  getFruits,
  getFineHerbes,
};
