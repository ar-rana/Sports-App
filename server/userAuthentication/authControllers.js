const User = require("../models/user");
const jwt = require("jsonwebtoken");
const maxAge = 1 * 24 * 60 * 60;

const createJWT = (id) => {
  return jwt.sign({ id }, "chatroom secret", {
    expiresIn: maxAge,
  });
};

module.exports.signup = async (req, res) => {
  if (req) {
    console.log("recieved req......");
  }
  console.log("req.body", req.body);
  const { name, email, password, age, state, sport } = req.body;
  try {
    const user = await User.create({
      name ,
      email,
      password,
      age,
      state,
      sport,
    });
    const token = createJWT(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json({ user });
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
};

module.exports.login = async (req, res) => {
  if (req) {
    console.log("recieved req......");
  }
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const token = createJWT(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json({ user });
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
};

module.exports.verifyuser = (req, res, next) => {
  if (req) {
    console.log("recieved req......");
  }
  const token = req.cookies.jwt;
  console.log(token);
  if (token) {
    jwt.verify(token, "chatroom secret", async (err, decodedToken) => {
      console.log("decoded token", decodedToken);
      if (err) {
        console.log(err.message);
      } else {
        let user = await User.findById(decodedToken.id);
        console.log(user);
        res.json(user);
        next();
      }
    });
  } else {
    res.status(404);
  }
};

module.exports.logout = (req, res) => {
  res.cookie("jwt", ":", { maxAge: 1 });
  res.status(200).json({ LogOut: true });
};
