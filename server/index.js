const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

const PORT = 5000;

app.use(cors());

app.get("/verify", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => {
  console.log("Server is runnig at 5000");
});
