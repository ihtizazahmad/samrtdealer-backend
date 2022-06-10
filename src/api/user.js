import  createError from 'http-errors'
import User from '../models/User.js'
import  authSchema  from '../middlewares/validate-schema.js'
import {signAccessToken} from '../middlewares/jwt-helper.js'
import {signRefreshToken} from '../middlewares/jwt-helper.js'
import {verifyRefreshToken} from '../middlewares/jwt-helper.js'

import  client from '../middlewares/init-redis.js'

export default  {
  register: async (req, res, next) => {
    try {
      // const { email, password } = req.body
      // if (!email || !password) throw createError.BadRequest()
      const result = await authSchema.validateAsync(req.body)

      const doesExist = await User.findOne({ email: result.email })
      if (doesExist)
        throw createError.Conflict(`${result.email} is already been registered`)

      const user = new User(result)
      const savedUser = await user.save()
      const accessToken = await signAccessToken(savedUser.id)
      const refreshToken = await signRefreshToken(savedUser.id)

      res.send({ accessToken, refreshToken })
    } catch (error) {
      if (error.isJoi === true) error.status = 422
      next(error)
    }
  },

  login: async (req, res, next) => {
    try {
      const result = await authSchema.validateAsync(req.body)
      const user = await User.findOne({ email: result.email })
      if (!user) throw createError.NotFound('User not registered')

      const isMatch = await user.isValidPassword(result.password)
      if (!isMatch)
        throw createError.Unauthorized('Username/password not valid')

      const accessToken = await signAccessToken(user.id)
      const refreshToken = await signRefreshToken(user.id)

      res.send({ accessToken, refreshToken })
    } catch (error) {
      if (error.isJoi === true)
        return next(createError.BadRequest('Invalid Username/Password'))
      next(error)
    }
  },

  refreshToken: async (req, res, next) => {
    try {
      const { refreshToken } = req.body
      if (!refreshToken) throw createError.BadRequest()
      const userId = await verifyRefreshToken(refreshToken)

      const accessToken = await signAccessToken(userId)
      const refToken = await signRefreshToken(userId)
      res.send({ accessToken: accessToken, refreshToken: refToken })
    } catch (error) {
      next(error)
    }
  },

  logout: async (req, res, next) => {
    try {
      const { refreshToken } = req.body
      if (!refreshToken) throw createError.BadRequest()
      const userId = await verifyRefreshToken(refreshToken)
      client.DEL(userId, (err, val) => {
        if (err) {
          console.log(err.message)
          throw createError.InternalServerError()
        }
        console.log(val)
        res.sendStatus(204)
      })
    } catch (error) {
      next(error)
    }
  },
}
// import express from "express";
// import userModel from "../models/User.js";
// import jwt from "jsonwebtoken";

// const router = express.Router();

// //Register Api

// router.get('/user',async(req,res)=>{
//    const user=await userModel.find(req.data)
//    res.send(user)
// })

// router.post("/user/register", async (req, res) => {

//   const {id, firstName,lastName, email, password } = req.body;
//   const userRegister = await userModel.findOne({ email });
//   if (userRegister) {
//       return res.send("this user is already registered")
//   }
//   const newUser = new userModel({id, firstName,lastName, email, password });
//   const savedUser = await newUser.save();
//   // .catch((err) => {
//   //   console.log("Error: ", err);
//   // });
  
//   if (savedUser) {
//   return res.send({ message: "Thanks for registering" });
//   }else{

//     return res.send({ error: "Cannot register user at the moment!" });
//   }

// });

// //Login Api
//  router.post("/user/login", async (req, res) => {
//   const { email, password } = req.body;
  
//   const userWithEmail = await userModel.findOne({ email }).catch(
//     (err) => {
//       console.log("Error: ", err);
//     }
//   );
//   if (!userWithEmail)
//   return res.send({ message: "Email  does not match!" });
  
//   if (userWithEmail.password !== password)
//   return res.send({ message: "password does not match!" });
  

//   const jwtToken = jwt.sign(
//     { id: userWithEmail.id, email: userWithEmail.email },
//     process.env.JWT_SECRET
//   );

//   res.json({id:userWithEmail.id, firstName:userWithEmail.firstName,lastName:userWithEmail.lastName, email:userWithEmail.email,password:userWithEmail.password, token: jwtToken });
// });

// export default router;


