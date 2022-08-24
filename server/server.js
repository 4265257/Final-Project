const express = require("express");
const app = express();

const { login, create, getByEmail } = require("./handlers");

app.get("/fetch-message", function (req, res) {
  res.status(200).json({ message: "Hello World" });
});
//app.post("/fetch-message", login);
app.get("/createUser", create);
//app.get("/fetch-message", getByEmail);

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
