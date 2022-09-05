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
  const newIdStatus = uuidv4()
  await client.connect();
  console.log("connected");
  const db = await client.db("db-name");
  const statusInfo = {
    newId: newIdStatus,
    status: req.body.status,
    user:  req.body.user,
    idItem:  req.body.idItem,
  }
  const comment = await db.collection("comments").insertOne(statusInfo);
  //console.log("comment", comment)
  res.status(200).json({ status: 200, data: comment, info: statusInfo});
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
  if (posts.length) {
    res.status(200).json({ status: 200, data: posts });
  } else if (posts.length === 0) {
    res
      .status(404)
      .json({ status: 404, data: posts, message: "Not found" });
  }
  client.close();
};
//returns all favorites
const getFavorites = async (req, res) => {
  //console.log("req",req.params)
  const { sub } = req.params
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("db-name");
  const favorites = await db.collection("favorites").find({"user.sub":sub}).toArray();
  if (favorites.length) {
    res.status(200).json({ status: 200, data: favorites });
  } else if (favorites.length === 0) {
    res
      .status(404)
      .json({ status: 404, data: favorites, message: "Not found" });
  }
  client.close();
};
//delete comment
const deleteComment = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("db-name");
    const { _id } = req.params;
    const result = await db.collection("comments").deleteOne({idItem: _id });
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




module.exports = { addPost, getPosts, addFavorite, getFavorites, deleteComment, deleteFavorite };













/* const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

("use strict");

//create
const  create =(comment, callback) => {
  const bcrypt = require('bcrypt');
//  const MongoClient = require('mongodb@3.1.4').MongoClient;
  const client = new MongoClient(MONGO_URI, options);

  client.connect(function (err) {
    if (err) return callback(err);

    const db = client.db('db-name');
    const users = db.collection('users');

    users.findOne({ email: comment.email }, function (err, withSameMail) {
      if (err || withSameMail) {
        client.close();
        return callback(err || new Error('the comment already exists'));
      }

      bcrypt.hash(comment.password, 10, function (err, hash) {
        if (err) {
          client.close();
          return callback(err);
        }

        comment.password = hash;
        users.insertOne(comment, function (err, inserted) {
          client.close();

          if (err) return callback(err);
          callback(null);
        });
      });
    });
  });
}
module.exports = {
//  login,
  create,
//  getByEmail
};
 */