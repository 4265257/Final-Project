const express = require("express");
const app = express();

const { addPost, getPosts, addFavorite, getFavorites, deleteComment, deleteFavorite } = require("./handlersUser");
const {
  getVeggies,
  getFruits,
  getFineHerbes,
//  getSingleVeggie,
//  getSingleFruit,
 // getSingleFineHerbe,
} = require("./handlersItems");

app.use(express.json())
const { auth } = require('express-oauth2-jwt-bearer');

// Authorization middleware. When used, the Access Token must
// exist and be verified against the Auth0 JSON Web Key Set.
const checkJwt = auth({
  audience:"BackEndFinalProject",
  //audience: 'https://dev-qsmcygd4.us.auth0.com/api/v2/',
  issuerBaseURL: `https://dev-qsmcygd4.us.auth0.com/`,
});


//testing end points
app.get("/fetch-message", function (req, res) {
  res.status(200).json({ message: "Hello World" });
});

//creating a new post on indivivual item pages
app.get('/getPosts', getPosts)
app.get('/getFavorites/:sub', getFavorites)
app.post('/addPost', checkJwt, addPost)
 app.post('/addFavorite', checkJwt, addFavorite)
 app.delete('/deleteComment/:_id', checkJwt,  deleteComment)
 app.delete('/deleteFavorite/:_id', checkJwt,  deleteFavorite)

/*  app.post('/:postId', async (req, res) => {
const postId = req.params.postId
const comments = await Comments.findAll({where : { PostId: postId}});
res.json(comments)
 } ) */

//end point to add new user
//app.get("/createUser", create);
//app.post("/fetch-message", login);
//app.get("/fetch-message", getByEmail);

//getting the data for items
app.get("/getVeggies", getVeggies);
app.get("/getFruits", getFruits);
app.get("/getFineHerbes", getFineHerbes);
// app.get("/getVeggie/:id", getSingleVeggie);
// app.get("/getFruit/:id", getSingleFruit);
// app.get("/getFineHerbe/:id", getSingleFineHerbe);

// this is our catch all endpoint.
app.get("*", (req, res) => {
  res.status(404).json({
    status: 404,
    message: "This is obviously not what you are looking for.",
  });
});

app.listen(8000, () => console.log(`Listening on port 8000`));











/* const express = require("express");
const app = express();

app.get("/fetch-message", function (req, res) {
  res.status(200).json({ message: "Hello World" });
});

app.listen(8000);
 */
