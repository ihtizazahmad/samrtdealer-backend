import { User } from '../models/User.js'
import jwt from "jsonwebtoken";
import sendMail from '../middlewares/send-email.js';

export default sendMail;
export const getUser = async (req, res) => {
  const user = await User.find(req.params)
  res.send(user)
}
export const register = async (req, res) => {
  const { name, email, password } = req.body
  try {
    const user = await User.findOne({ email })
    if (user) {
      return res.status(400).json({ message: "User with this email already exists." })
    }
    const token = jwt.sign({ name, email, password }, process.env.JWT_SECRET,{expiresIn:'20min'})
    const link = `${process.env.BASE_URL}/activate-account/\nToken=\n${token}`;
    await sendMail(email, "Account Activation Link",`<h2>please copy the token first,then click on given link to activate ur account.</h2>
    ${link} `)
    return res.status(200).json({ message: "Account Verification Link Send To Ur Account" })

  } catch {
    res.send("An error occured");
    console.log(error);
  }
}

export const activateAccount = (req, res) => {
  const { token } = req.body;
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
          res.send({ message: "Thanks for registering" });
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
}
// export const register = async (req, res) => {

//   const { name, email, password ,role} =req.body;

//   const userRegister = await User.findOne({email});

//     if (userRegister) {
//       return res.send({ message: "this user is already registered" })
//     }
//     const newUser = new User({ name,email, password,role });
//     const savedUser = await newUser.save();
//   if (savedUser) {
//     res.send({ message: "Thanks for registering" });
//   } else {
//     res.status(400).send({ error: "Cannot register user at the moment!" });
//   }

// }
export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
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



