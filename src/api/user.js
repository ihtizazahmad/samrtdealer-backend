import { retailerUser, superUser, User } from '../models/User.js'
import jwt from "jsonwebtoken";
import sendSms from '../middlewares/send-sms.js';


export const getUser = async (req, res) => {
  let filter={}
  if(req.query.categ){
    filter = { service:{ $all:[req.query.categ] }}
  }
    const user = await User.find(filter)
    .populate({path:"location",populate:{path:"tehsil",populate:{path:"district",populate:{path:"province"}}}})
    res.status(200).json({success:true,user})
}

export const getUserByAndroid = async (req, res) => {
  let filter={}
  if(req.query.categ){
    filter = { service:{ $all:[req.query.categ] },isActive:true}
  }
  const user = await User.find(filter).select('name ,_id, picture')
    res.status(200).json({supplier:user})
}

export const getRetailer = async (req, res) => {
    const user = await retailerUser.find()
    // .populate("location")
    .populate({path:"location",populate:{path:"tehsil",populate:{path:"district",populate:{path:"province"}}}})
    res.send(user)
}
export const getRetailerbyId = async (req, res) => {
  let filter={_id:req.params._id} 
  const user = await retailerUser.find(filter)
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


// retailer register 

export const retailerRegister = async (req, res) => {
  const { fullName, fatherName,cnicNumber,shopName,shopNumber,annualSales,formerNo,
    phoneNumber ,picture,cnicFront,cnicBack,pinLocation,location
  } = req.body;
  if(!fullName || !cnicNumber|| !shopName|| !shopNumber||  !formerNo || !phoneNumber 
    || !picture || !cnicFront || !cnicBack || !location || !pinLocation
    ){
    return res.status(400).send({success:false,message: "please fill the feilds"})
  }
  let checkPhoneNo=await retailerUser.findOne({phoneNumber})
  if(checkPhoneNo){
    return res.status(400).send({success:false, message: "Phone No already register please give another phone no" });
  }
  const user = await retailerUser.findOne({ fullName,cnicNumber })
  if (user) {
    return res.status(400).send({success:false, message: "user already register" });
  }
  const retailer = new retailerUser({ fullName, fatherName,cnicNumber,shopName,shopNumber,annualSales,formerNo,
    phoneNumber,picture,cnicFront,cnicBack,pinLocation,location });
  const registerUser = await retailer.save();
  if (registerUser) {
    res.status(200).json({success:true, message: "Retailer Registered successfully" });
  } else {
    res.status(400).send({ error: "Cannot register user at the moment!" });
  }

}




// otp send to retailer user
export const userLoginOtp = async (req, res) => {
  const { phoneNumber } = req.body;
  if(!phoneNumber){
    return res.status(400).send({success:false,message: "please phone no is required"})
  }
  try {
    let code =Math.floor(Math.random()*90000)+10000
    await sendSms(phoneNumber,code);
    let findNumber=await retailerUser.findOne({phoneNumber})
    if(findNumber){
    await retailerUser.findOneAndUpdate({phoneNumber},{code})
    return res.json({success:true, message: `code send to your mobile number` })
    }
    else{
      return res.json({success:false, message: `phone no not found` })
    }
  
  } catch (error) {
    res.send("An error occured");
        console.log(error);
  }
}

// varify otp for retailer user 
export const otpVarify = async (req, res) => {
  const {phoneNumber, code } = req.body;
  if(!phoneNumber || !code){
    return res.status(400).send({success:false, message: "please number and code is required"})
  }
  try {
   let user= await retailerUser.findOne({phoneNumber,code});
   if(user){
   let _id=user._id
    await retailerUser.findByIdAndUpdate({_id},{code:null})
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    const userId = { _id: user._id }
    res.send({success:true, message: "user login successfully", token, userId });
    
  }
  else{
    res.send({success:false, message: "invalid code please enter valid code or enter again phone no"});
  }
  } catch (error) {
    res.send("An error occured");
        console.log(error);
  }
}


// update retailer api 
export const updateRetailer = async (req, res) => {
  let data = await retailerUser.findByIdAndUpdate(
    { _id: req.params._id }, {
    $set: req.body
  }, { new: true }
  );
  if (data) {
    res.send({success:true, message: "User data updated successfully" });
  }
  else {
    res.send({success:false, message: "something went wrong" })
  }
}

// picture upload api 
export const pictureUpload = async (req, res) => {
// return  console.log("picture upload ,",req.file)
let imageUrl=req.file.location ? req.file.location : null
res.status(200).json({success:true,imageUrl})
}

export const updateUser = async (req, res) => {
  // console.log(req.params)
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

export const updateUserByPassword = async (req, res) => {
  const {currentPassword,newPassword,_id}=req.body
  let userData = await User.findOne({_id})
  if(currentPassword !==userData.password){
    return res.status(400).json({message:"current password is incorrect"})
  }
  let data = await User.findByIdAndUpdate(
    { _id }, {
    $set: {password:newPassword}
  }, { new: true }
  );
  if (data) {
    res.status(200).json({ message: "password updated successfully" });
  }
  else {
    res.status(400).json({ message: "something went wrong!" })
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



