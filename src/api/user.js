import { superUser, User } from '../models/User.js'
import jwt from "jsonwebtoken";


export const getUser = async (req, res) => {
  let filter={}
  if(req.query.role){
    filter ={role:req.query.role.split(',')}
  }
  const user = await User.find(filter).populate('role')
  res.send(user)
}

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }) || await superUser.findOne({email})
  if (!user) {
    return res.status(400).send({ message: "User not found" });
  }
  if (user.password !== password) {
    return res.status(400).send({ message: "Wrong password" });
  }
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
  const userId = { _id: user._id };
  res.send({ message: "user login successfully", token, userId });

}

export const updateUser = async (req, res) => {
  console.log(req.params)
    let data = await User.findByIdAndUpdate(
        { _id: req.params._id }, {
        $set: req.body
    }, { new: true }
    );
    if (data) {
        res.send({ message: "User data updated successfully" });
    }
    else {
        res.send({ message: "User data cannot be updated successfully" })
    }
}
export const deleteUser = async (req, res) => {
  console.log(req.params)
  const { email } = req.params
  let data = await User.findOneAndDelete({ email })
  if (data) {
    res.send({ message: "User data delete successfully" });
  } else {
    res.send({ message: "User data cannot delete successfully" })
  }
}



