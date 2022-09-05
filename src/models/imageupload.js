import mongoose from "mongoose";
const imageSchema=new mongoose.Schema({
    image:{
        type:String
    }
})
const image=new mongoose.model('image',imageSchema)
export default image;