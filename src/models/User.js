import mongoose from 'mongoose'
import Joi from 'joi';

const Schema = mongoose.Schema
const UserSchema = new Schema({
  name:{
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  regNo:{
    type:String
  },
  contactNo:{
    type:String
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
  },
  isActive:{
    type:Boolean,
    default:true
  },
  manufactureId:{
    type:String
  },
  location:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"villageLocation"
  },
  service:[{
    type:String
  }]

},{timestamps:true})
const superUserSchema = new Schema({
  name:{
    type: String,
  },
  email: {
    type: String,
    required: true,
    // lowercase:true,
    // unique:true
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
  }
})

const retailerUserSchema = new Schema({
 fullName:{
  type:String,
  required:true
 },
 fatherName:{
  type:String
 },
 cnicNumber:{
  type:String,
  required:true
 },
 shopName:{
  type:String,
  required:true
 },
shopNumber:{
  type:String,
  required:true
},
annualSales:{
  type:String
},
formerNo:{
  type:String
},
  phoneNumber:{
    type: String,
    required:true
  },
  code: {
    type: String,
  },
  isActive:{
    type:Boolean,
    default:true
  },
 picture:{
  type:String,
 },
 cnicFront:{
  type:String,
 },
cnicBack:{
  type:String
},
pinLocation:{
  type: String
},
location:{
  type: mongoose.Schema.Types.ObjectId,
  ref:"villageLocation"
},
},{timestamps:true})
// UserSchema.pre('save', async function (next) {
//   try {

//     if (this.isNew) {
//       const salt = await bcrypt.genSalt(10)
//       const hashedPassword = await bcrypt.hash(this.password, salt)
//       this.password = hashedPassword
//     }
//     next()
//   } catch (error) {
//     next(error)
//   }
// })

// UserSchema.methods.isValidPassword = async function (password) {
//   try {
//     return await bcrypt.compare(password, this.password)
//   } catch (error) {
//     throw error
//   }
// }
// export const validate = (user) => {
//   const schema = Joi.object({
//       name: Joi.string().required(),
//       email: Joi.string().email().required(),
//       password: Joi.string().required(),
//   });
//   return schema.validate(user);
// };

export  const User = mongoose.model('user', UserSchema)
export const superUser=mongoose.model('superUser',superUserSchema)
export const retailerUser=mongoose.model('retaileruser',retailerUserSchema)

export default {User,superUser,retailerUser};
