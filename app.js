const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

app.use(cors());
app.use(bodyParser.json()); //computer: bleep-bloop-bleep, body-parser: that's what she said
//technically, converting the data into suitable format to transfer

//Import routes
const postsRoute = require("./routes/posts");

app.use("/posts", postsRoute); //brings the posts here, reduce clusturing
//Middlewares

app.get("/", (req, res) => {
  res.send("We are on home");
});

//Connecting to a database (MongoDB/Mongoose)
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log("connected to DB!")
);

//Start listening to a server
app.listen(3000);
