import mongoose from "mongoose";

const logoSchema=new mongoose.Schema({
    myFile:{
        type:String
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'user'
    }
})
const logoModel=new mongoose.model('logo',logoSchema);
export default logoModel;