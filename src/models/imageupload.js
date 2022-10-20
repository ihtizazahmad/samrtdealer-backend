import mongoose from "mongoose";
const imageSchema=new mongoose.Schema({
    picture:{
        type:String,
        default:"default.png"
    }
})
const image=new mongoose.model('image',imageSchema)
export default image;