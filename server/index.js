const express = require("express");
const cors = require("cors");
const body_parser = require("body-parser");
const mongoose = require("mongoose");
const authRoutes = require("./userAuthentication/authRoutes");
const mongoDB = require("./MongoAPI");

const app = express();

const options = {
  origin: "http://localhost:3000",
  credentials: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: "Content-Type,Authorization",
};

const PORT = 5000;

app.use(cors(options));
app.use(body_parser.json());
app.use(authRoutes);

mongoose
  .connect(mongoDB)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

app.get("/verify", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => {
  console.log("Server is runnig at 5000");
});
