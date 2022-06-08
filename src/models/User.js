import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id:{
    type:String
  },
    firstName: {
        type:String,
    
      },
      lastName:{
        type:String
      },
      email: {
        type:String,
     
      },
      password: {
        type:String,
    
      }
})
const userModel= mongoose.model("user", userSchema);
export default userModel;