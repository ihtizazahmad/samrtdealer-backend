import express from "express";
import userModel from "../models/User.js";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  
  const userWithEmail = await userModel.findOne({ where: { email } }).catch(
    (err) => {
      console.log("Error: ", err);
    }
  );
  if (!userWithEmail)
  return res.send({ message: "Email  does not match!" });
  
  // if (userWithEmail.password !== password)
  // return res.send({ message: "password does not match!" });
  

  const jwtToken = jwt.sign(
    { id: userWithEmail.id, email: userWithEmail.email },
    process.env.JWT_SECRET
  );

  res.send({ message: "user login Successfully", token: jwtToken });
});

export default router;
