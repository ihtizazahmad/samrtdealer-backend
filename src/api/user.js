import User from '../models/User.js'
import jwt from "jsonwebtoken";



export const getUser = async (req, res) => {
  const user = await User.find(req.data)
  res.send(user)
}

export const register = async (req, res) => {

  const { userName, email, password } = req.body;
  const userRegister = await User.findOne({ email });
  if (userRegister) {
    return res.send({ message: "this user is already registered" })
  }
  const newUser = new User({ userName, email, password });
  const savedUser = await newUser.save();
  if (savedUser) {
    res.send({ message: "Thanks for registering" });
  } else {
    res.status(400).send({ error: "Cannot register user at the moment!" });
  }

}
export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).send({ message: "User not found" });
  }
  if (user.password !== password) {
    return res.status(400).send({ message: "Wrong password" });
  }
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  res.send({ message: "user login successfully", token });
}




