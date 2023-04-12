const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const article = require("./Routes/articlesroutes");
app.use(express.urlencoded({ extended: true }));

require("dotenv").config();

const port = process.env.port || 5000;

var corsOptions = {
  origin: "http://koora4lives.live/",
  origin: "https://www.koora4lives.live",
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

const URI = process.env.ATLAS_URI;
mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log("Connected To DataBase :{)");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log(`Server is running in Port :${port}`);
});

app.use("/", article);
