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
//  const { veggies } = require("./data/veggies");
//  const { fruits } = require("./data/fruits");
//  const { fineHerbes } = require("./data/fineHerbes");

//testing end points
app.get("/fetch-message", function (req, res) {
  res.status(200).json({ message: "Hello World" });
});

//creating a new post on indivivual item pages
 app.post('/addPost', addPost)
 app.get('/getPosts', getPosts)
 app.post('/addFavorite', addFavorite)
 app.get('/getFavorites', getFavorites)
 app.delete('/deleteComment/:_id', deleteComment)
 app.delete('/deleteFavorite/:_id', deleteFavorite)

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
