const express = require("express");
const app = express();

const {
  addPost,
  getPosts,
  addFavorite,
  getFavorites,
  deleteComment,
  deleteFavorite,
} = require("./handlersUser");
const {
  getVeggies,
  getFruits,
  getFineHerbes,
} = require("./handlersItems");

app.use(express.json());
const { auth } = require("express-oauth2-jwt-bearer");

const checkJwt = auth({
  audience: "BackEndFinalProject",
  issuerBaseURL: `https://dev-qsmcygd4.us.auth0.com/`,
});

//testing end points
app.get("/fetch-message", function (req, res) {
  res.status(200).json({ message: "Hello World" });
});

//creating a new post on indivivual item pages
app.get("/getPosts", getPosts);
app.get('/getFavorites/:sub', checkJwt, getFavorites)
app.post("/addPost", checkJwt, addPost);
app.post("/addFavorite", checkJwt, addFavorite);
app.delete("/deleteComment/:_id", checkJwt, deleteComment);
app.delete("/deleteFavorite/:_id", checkJwt, deleteFavorite);

//getting the data for items
app.get("/getVeggies", getVeggies);
app.get("/getFruits", getFruits);
app.get("/getFineHerbes", getFineHerbes);

// this is our catch all endpoint.
app.get("*", (req, res) => {
  res.status(404).json({
    status: 404,
    message: "This is obviously not what you are looking for.",
  });
});

app.listen(8000, () => console.log(`Listening on port 8000`));
