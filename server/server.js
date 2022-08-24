const express = require("express");
const app = express();

const { login, create, getByEmail } = require("./handlersUser");
const { getVeggies, getFruits, getFineHerbes } = require("./handlersItems");

//  const { veggies } = require("./data/veggies");
//  const { fruits } = require("./data/fruits");
//  const { fineHerbes } = require("./data/fineHerbes");

//testing end points
app.get("/fetch-message", function (req, res) {
  res.status(200).json({ message: "Hello World" });
});

//end point to add new user
app.get("/createUser", create);
//app.post("/fetch-message", login);
//app.get("/fetch-message", getByEmail);

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

/* const express = require("express");
const app = express();

app.get("/fetch-message", function (req, res) {
  res.status(200).json({ message: "Hello World" });
});

app.listen(8000);
 */
