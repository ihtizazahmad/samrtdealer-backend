import express from "express";
import bcrypt from "bcrypt";
import userModel from "../models/User.js";

const router = express.Router();

router.get('/register',async(req,res)=>{
   const user=await userModel.find(req.data)
   res.send(user)
})

router.post("/register", async (req, res) => {

  const { fullName, email, password } = req.body;
  const userRegister = await userModel.findOne({ email });
  if (userRegister) {
      return res.send("this user is already registered")
  }
  const newUser = new userModel({ fullName, email, password });
  const savedUser = await newUser.save().catch((err) => {
    console.log("Error: ", err);
   return res.send({ error: "Cannot register user at the moment!" });
  });

  if (savedUser) 
  return res.send({ message: "Thanks for registering" });
});
export default router;
