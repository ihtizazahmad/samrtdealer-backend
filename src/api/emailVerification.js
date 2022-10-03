import { User } from '../models/User.js'
import jwt from "jsonwebtoken";
import sendMail from '../middlewares/send-email.js';
import express from 'express';
const router=express.Router()
router.post('/', async (req, res) => {
    const { name, email, password } = req.body
    try {
      const user = await User.findOne({ email })
      if (user) {
        return res.status(400).json({ message: "User with this email already exists." })
      }
      const token = jwt.sign({ name, email, password }, process.env.JWT_SECRET,{expiresIn:'20min'})
      const link = `${process.env.BASE_URL}/activate-account/${token}`;
      await sendMail(email, "Account Activation Link",`<h2>please click on given link to activate ur account.</h2>
      ${link} `)
      return res.status(200).json({ message: "Account Verification Link Send To Ur Account" })
  
    } catch {
      res.send("An error occured");
      console.log(error);
    }
  }
)
 router.post('/:token', (req, res) => {
    const { token } = req.params;
    console.log("token:",token);
    try {
      if (token) {
        jwt.verify(token, process.env.JWT_SECRET,async function (err, decodedToken) {
          if (err) {
            return res.status(400).json({ message: "token is invalid or expired" })
          }
          const { name, email, password } = decodedToken
          const userRegister = await User.findOne({ email });
          if (userRegister) {
            return res.send({ message: "this user is already registered" })
          }
          const newUser = new User({ name, email, password });
          const savedUser = await newUser.save();
          if (savedUser) {
            res.send({ message: "Account Verified:Thanks For Registering" });
          } else {
            res.status(400).send({ error: "Cannot register user at the moment!" });
          }
        })
      } else {
        return res.json({ message: "Something Went Wrong" })
      }
  
    } catch (error) {
      res.send("An error occured");
      console.log(error);
    }
  })
  export default router;