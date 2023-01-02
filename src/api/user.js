import { otpUser, superUser, User } from '../models/User.js'
import jwt from "jsonwebtoken";
import sendSms from '../middlewares/send-sms.js';


export const getUser = async (req, res) => {
    const user = await User.find(req)
    res.send(user)
}

export const getUserById = async (req, res) => {
    const user = await User.find(req.params)
    res.send(user)
}
export const getSuperUser = async (req, res) => {
    const user = await superUser.find(req)
    res.send(user)
}

export const login = async (req, res) => {
  const { email, password } = req.body;
  if(!email || !password){
    return res.status(400).send({message: "please fill the feilds"})
  }
  const user = await superUser.findOne({ email })
  if (!user) {
    return res.status(400).send({ message: "User not found" });
  }
  if (user.password !== password) {
    return res.status(400).send({ message: "Wrong password" });
  }
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
  const userId = { _id: user._id }
  const role=user.role
  res.send({ message: "user login successfully", token, userId,role });

}

export const userLogin = async (req, res) => {
  const { email, password } = req.body;
  if(!email || !password){
    return res.status(400).send({message: "please fill the feilds"})
  }

  const user = await User.findOne({ email })
  if (!user) {
    return res.status(400).send({ message: "User not found" });
  }
  if (user.password !== password) {
    return res.status(400).send({ message: "Wrong password" });
  }
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
  const userId = { _id: user._id }
  const role=user.role
  res.send({ message: "user login successfully", token, userId,role });

}

// otp send to user
export const userLoginOtp = async (req, res) => {
  const { number } = req.body;
  if(!number){
    return res.status(400).send({message: "please no is required"})
  }
  try {
    let code =Math.floor(Math.random()*90000)+10000
    await sendSms(number,code);
    let findNumber=await otpUser.findOne({number})
    if(findNumber){
    await otpUser.findOneAndUpdate({number},{code})
    return res.json({ message: `link send to your mobile number` })
    }
    else{
      const saveCode=new otpUser({number,code})
      await saveCode.save()
      return res.json({ message: `code send to your mobile number` })
    }
  
  } catch (error) {
    res.send("An error occured");
        console.log(error);
  }
}

// varify otp for user 
export const otpVarify = async (req, res) => {
  const {number, code } = req.body;
  if(!number ||!code){
    return res.status(400).send({message: "please number and code is required"})
  }
  try {
   let user= await otpUser.findOne({number,code});
   if(user){
   let _id=user._id
    await otpUser.findByIdAndUpdate({_id},{code:null})
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    const userId = { _id: user._id }
    res.send({ message: "user login successfully", token, userId });
    
  }
  else{
    res.send({ message: "invalid code please enter valid code or register again"});
  }
  } catch (error) {
    res.send("An error occured");
        console.log(error);
  }
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



