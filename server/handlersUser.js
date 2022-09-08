const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const { v4: uuidv4 } = require("uuid");

//adding comments
const addPost = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const newIdStatus = uuidv4();
  await client.connect();
  console.log("connected");
  const db = await client.db("db-name");
  const statusInfo = {
    newId: newIdStatus,
    status: req.body.status,
    user: req.body.user,
    idItem: req.body.idItem,
  };
  const comment = await db.collection("comments").insertOne(statusInfo);
  res.status(200).json({ status: 200, data: comment, info: statusInfo });
  client.close();
};
//adding favorites
const addFavorite = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  console.log("connected");
  const db = await client.db("db-name");
  const favorite = await db.collection("favorites").insertOne(req.body);
  res.status(200).json({ status: 200, data: favorite });
  client.close();
};
// returns all comments
const getPosts = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("db-name");
  const posts = await db.collection("comments").find().toArray();
  res.status(200).json({ status: 200, data: posts });
  client.close();
};
//returns all favorites
const getFavorites = async (req, res) => {
  const { sub } = req.params;
  const client = await new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = await client.db("db-name");
  const favorites = await db
    .collection("favorites")
    .find({ "user.sub": sub })
    .toArray();
  res.status(200).json({ status: 200, data: favorites });
  client.close();
};

//delete comment
const deleteComment = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("db-name");
    const { _id } = req.params;
    const result = await db.collection("comments").deleteOne({ newId: _id });
    res.status(201).json({ status: 201, data: result });
  } catch (err) {
    res.status(500).json({ status: 500, data: req.body, message: err.message });
    console.log(err.stack);
  }
  client.close();
};
//delete favorite
const deleteFavorite = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("db-name");
    const { _id } = req.params;
    const result = await db.collection("favorites").deleteOne({ idItem: _id });
    res.status(201).json({ status: 201, data: result });
  } catch (err) {
    res.status(500).json({ status: 500, data: req.body, message: err.message });
    console.log(err.stack);
  }
  client.close();
};

module.exports = {
  addPost,
  getPosts,
  addFavorite,
  getFavorites,
  deleteComment,
  deleteFavorite,
};
