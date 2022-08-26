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
  const db = client.db("db-name");
  const comment = await db.collection("comments").insertOne(req.body);
  res.status(201).json({ status: 201, data: comment });
  client.close();
};

//getCollection("exercise_1.3");
module.exports = { addPost };













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