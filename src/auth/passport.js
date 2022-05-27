import passport from "passport";
import passwordJwt from "passport-jwt";
const ExtractJwt = passwordJwt.ExtractJwt;
const StrategyJwt = passwordJwt.Strategy;
import userModel from "../models/User.js";

passport.use(
  new StrategyJwt(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    },
    function (jwtPayload, done) {
      return userModel.findOne({ where: { id: jwtPayload.id } })
        .then((user) => {
          return done(null, user);
        })
        .catch((err) => {
          return done(err);
        });
    }
  )
);
