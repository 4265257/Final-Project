const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const addPost = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  console.log("connected");
  const db = await client.db("db-name");
  console.log("req.body", req.body)
  const comment = await db.collection("comments").insertOne(req.body);
  res.status(201).json({ status: 201, data: comment });
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





module.exports = { addPost, getPosts };













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