'use strict';
import  Jwt  from 'jsonwebtoken';
import User from '../models/User';
import config from '../config/config.js'
// handleJWT with roles
const handleJWT = (req, res, next) => async (err, user, info) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]
  //  console.log(token)
  // Check for token
  if (!token)
    return res.status(401).json({ token: false, msg: 'No token, authorization denied' });
  jwt.verify(token, config.SECRET, async (err, user) => {
    if (err) {
      // console.log(err)
      return res.status(200).json({ token: false, msg: 'Token Expired' })
    }
    let check;
    if (user.role == "Customer") {
      check = await User.findOne({ _id: user.id });
    }
    if (check) {
      req.user = user
      next();
    } else {
      return res.json({ Error: true, token: false, msg: 'Access Denied Due To Unauthorized User' });
    }
  })

  const error = err || info;
  // console.log(`req login1 ${req.logIn}`);
  // const logIn = bluebird.promisify(req.logIn);
  // console.log(user)
  // const apiError = new APIError(
  //   error ? error.message : 'Unauthorized',
  //   httpStatus.UNAUTHORIZED
  // );

  // log user in
  // try {
  //   if (error || !user) throw error;
  //   await logIn(user, { session: false });
  // } catch (e) {
  //   console.log(e);
  //   return next(apiError);
  // }

  // see if user is authorized to do the action
  // if (!roles.includes(user.role)) {
  //   return next(new APIError('Forbidden', httpStatus.FORBIDDEN));
  // }
  // req.user = user;
  // console.log(req.user)
  // req.token = req.headers.authorization.split(' ')[1];

  // return next();
};



// exports the middleware
const authorize = (req, res, next) =>
  passport.authenticate('jwt', { session: false }, handleJWT(req, res, next))(
    req,
    res,
    next
  );

module.exports = authorize;
