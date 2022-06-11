import express from 'express'
import  createError from 'http-errors'
import User from '../models/User.js'
import  authSchema  from '../middlewares/validate-schema.js'
import tokenAcess from '../middlewares/jwt-helper.js'
// import signRefreshToken from '../middlewares/jwt-helper.js'
// import verifyRefreshToken from '../middlewares/jwt-helper.js'
import  client from '../middlewares/init-redis.js'
const router=express.Router()
const signToken=tokenAcess.signAccessToken;
const verifyaccessToken=tokenAcess.verifyAccessToken;
const signrefreshToken=tokenAcess.signRefreshToken;
const verifyrefreshToken=tokenAcess.verifyRefreshToken;

router.post('/user',async (req, res, next)  => {
  try {
    // const { email, password } = req.body
    // if (!email || !password) throw createError.BadRequest()
    const result = await authSchema.validateAsync(req.body)
    
    const doesExist = await User.findOne({ email: result.email })
    if (doesExist)
    throw createError.Conflict(`${result.email} is already been registered`)
    
    const user = new User(result)
    const savedUser = await user.save()
      const accessToken = await signToken(savedUser.id)
      const refreshToken = await signrefreshToken(savedUser.id)

      res.send({ accessToken, refreshToken })
    } catch (error) {
      if (error.isJoi === true) error.status = 422
      next(error)
    }
  })

  router.post('/user',async (req, res, next) => {
    try {
      const result = await authSchema.validateAsync(req.body)
      const user = await User.findOne({ email: result.email })
      if (!user) throw createError.NotFound('User not registered')

      const isMatch = await user.isValidPassword(result.password)
      if (!isMatch)
        throw createError.Unauthorized('Username/password not valid')

      const accessToken = await signToken(user.id)
      const refreshToken = await signrefreshToken(user.id)

      res.send({ accessToken, refreshToken })
    } catch (error) {
      if (error.isJoi === true)
        return next(createError.BadRequest('Invalid Username/Password'))
      next(error)
    }
  })

  router.post('/user',async (req, res, next) => {
    try {
      const { refreshToken } = req.body
      if (!refreshToken) throw createError.BadRequest()
      const userId = await verifyrefreshToken(refreshToken)
        

      const accessToken = await signToken(userId)
      const refToken = await signrefreshToken(userId)
      res.send({ accessToken: accessToken, refreshToken: refToken })
    } catch (error) {
      next(error)
    }
  }),

  router.delete('/user',async (req, res, next)=> {
    try {
      const { refreshToken } = req.body
      if (!refreshToken) throw createError.BadRequest()
      const userId = await verifyrefreshToken(refreshToken)
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
  })
export default router;


