import mongoose from "mongoose";
const tokenSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'user'
    },
    token:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date
    }

})
const token=new mongoose.model('token',tokenSchema)
export default token;