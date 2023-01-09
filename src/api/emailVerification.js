import { User, superUser } from '../models/User.js'
import jwt from "jsonwebtoken";
import sendMail from '../middlewares/send-email.js';
import express from 'express';
const router = express.Router()
router.post('/', async (req, res) => {
  const { name, email, password, role } = req.body
  if (!name || !email || !password || !role) {
    return res.status(400).send({ message: "please fill all feilds" })
  }
  try {
    let user = await superUser.findOne({ email })
    if (user) {
      return res.status(400).send({ message: "Super Admin already register" })
    } else if (!user) {
      const token = jwt.sign({ name, email, password, role }, process.env.JWT_SECRET, { expiresIn: '20min' })
      const link = `https://smartdealer.netlify.app/activate-account/${token}`;
      await sendMail(email, "Account Activation Link", `<h2>please click on given link to activate ur account.</h2>
      ${link} `)
      return res.status(200).json({ message: "Account Verification Link Send To your Account" })

    }
  } catch (error) {
    res.send("An error occured");
    console.log(error);
  }
}
)


// user register 
router.post('/user', async (req, res) => {
  const { name, email, password, role,regNo,contactNo,manufactureId } = req.body
  if (!name || !email || !password || !role) {
    return res.status(400).send({ message: "please fill all feilds" })
  }
  try {
    let user = await User.findOne({ email })
    if (user) {
      return res.status(400).send({ message: "user already register" })
    } else if (!user) {
      const token = jwt.sign({ name, email, password, role,regNo,contactNo,manufactureId }, process.env.JWT_SECRET, { expiresIn: '20min' })
      // const link = `https://smartdealer.netlify.app/activate-account/${token}`;
      const link = `http://localhost:13012/activate-account/${token}`;
      await sendMail(email, "Account Activation Link", `<h2>please click on given link to activate ur account.</h2>
      ${link} you will be register as a ${role} `)
      return res.status(200).json({ message: "Account Verification Link Send To your Account" })

    }
  } catch (error) {
    res.send("An error occured");
    console.log(error);
  }
}
)

router.post('/:token', (req, res) => {
  const { token } = req.params;
  //  console.log("token:", token);  
  // console.log("token :")
   try {
    if (token) {
      jwt.verify(token, process.env.JWT_SECRET, async function (err, decodedToken) {
        if (err) {
          return res.status(400).json({ message: "token is invalid or expired" })
        }
        const { name, email, password, role,regNo,contactNo,manufactureId } = decodedToken
        if (role == 'superAdmin') {
          const adminUser = await superUser.findOne({ email });
          if (adminUser) {
            return res.send({ message: "already registered" })
          }
          const superAdmin = new superUser({ name, email, password, role });
          const savedSuprAdmin = await superAdmin.save();
          if (savedSuprAdmin) {
            res.send({ message: "Account Verified:Thanks For Registering SuperUser" });
          } else {
            res.status(400).send({ error: "Cannot register user at the moment!" });
          }
          
        }
        else {
          const userRegister = await User.findOne({ email });
          if (userRegister) {
            return res.send({ message: "this user is already registered" })
          }
          const newUser = new User({ name, email, password, role,regNo,contactNo,manufactureId });
          // return  console.log("decode :",decodedToken,newUser )
          const savedUser = await newUser.save();
          if (savedUser) {
            res.send({ message: `Account Verified:Thanks For Registering ${role}` });
          } else {
            res.status(400).send({ error: "Cannot register user at the moment!" });
          }
        }
      })
    }
  } catch (error) {
    res.send("An error occured");
    console.log(error);
  }
})
export default router;