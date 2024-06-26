const express = require("express");
const mongoose = require("mongoose");

const app = require("./app");

/* Loading the environment variables from the .env file. */
require("dotenv").config();

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/todoapiDB";
// const MONGO_KEY = "mongodb+srv://othmangourar:gothr123@action.goorovn.mongodb.net/?retryWrites=true&w=majority&appName=Action"

/* Connecting to the database and then starting the server. */
mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    app.listen(PORT, console.log("Server stated on port 5000"));
  })
  .catch((err) => {
    console.log(err);
  });
