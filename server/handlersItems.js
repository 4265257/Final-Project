const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

("use strict");


// use this data. Changes will persist until the server (backend) restarts.
// const { veggies } = require("./data/veggies");
// const { fruits } = require("./data/fruits");
// const { fineHerbes } = require("./data/fineHerbes");

// const { connect } = require("http2");

// returns all veggies
const getVeggies = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("db-name");
  const veggies = await db.collection("veggies").find().toArray();
//  console.log("reservations", reservations);
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
  const veggies = await db.collection("fruits").find().toArray();
//  console.log("reservations", reservations);
  if (veggies.length) {
    res.status(200).json({ status: 200, data: veggies });
  } else if (veggies.length === 0) {
    res
      .status(404)
      .json({ status: 404, data: veggies, message: "Not found" });
  }
  client.close();
};

// returns all Fine Herbes
const getFineHerbes = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("db-name");
  const veggies = await db.collection("fineHerbes").find().toArray();
//  console.log("reservations", reservations);
  if (veggies.length) {
    res.status(200).json({ status: 200, data: veggies });
  } else if (veggies.length === 0) {
    res
      .status(404)
      .json({ status: 404, data: veggies, message: "Not found" });
  }
  client.close();
};
/* 
// returns single veggie 
const getSingleVeggie = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("db-name");
  const veggieId = req.params.id;
  console.log("veggieId",veggieId)
  const result = await db.collection("veggies").findOne({ id: veggieId });
  result
    ? res.status(200).json({ status: 200, veggieId, data: result })
    : res.status(404).json({ status: 404, veggieId, data: "Not Found" });
  client.close();
};
// returns single veggie 
const getSingleFruit = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("db-name");
  const fruitId = req.params.id;
  const result = await db.collection("fruits").findOne({ id: fruitId });
  result
    ? res.status(200).json({ status: 200, fruitId, data: result })
    : res.status(404).json({ status: 404, fruitId, data: "Not Found" });
  client.close();
};

// returns single veggie 
const getSingleFineHerbe = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("db-name");
  const fineHerbeId = req.params.id;
  const result = await db.collection("fineHerbes").findOne({ id: fineHerbeId });
  result
    ? res.status(200).json({ status: 200, fineHerbeId, data: result })
    : res.status(404).json({ status: 404, fineHerbeId, data: "Not Found" });
  client.close();
};
 */


module.exports = {
  getVeggies,
  getFruits,
  getFineHerbes,
  // getSingleVeggie,
  // getSingleFruit,
  // getSingleFineHerbe
};
