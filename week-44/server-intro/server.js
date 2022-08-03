const express = require("express");
const app = express();

const path = require("path");

const data = {
  8112: {
    title: "Name of the Wind",
    author: "Patrick Rothfuss",
  },
  9121: {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
  },
  1081: {
    title: "The Giver",
    author: "Lois Lowry",
  },
};

app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "./node_modules")));

const port = 3000;
// app.get('/', function (request, response) {
//     console.log("Someone has come into the server. Brace yourselves.")
//     response.send("Ending the cycle, thanks for visiting")
// })

app.get("/books/:bookId", function (req, res) {
  const id = req.params.bookId;
  res.send(data[id]);
});

app.listen(port, function () {
  console.log(`Running server on port ${port}`);
});
