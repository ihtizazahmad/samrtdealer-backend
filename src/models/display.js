import mongoose from 'mongoose';
const displaySchema = new mongoose.Schema({
    name: {
        type : String
    },
    order: {
        type : Number  
    },
    systemDisplay: {
        type : Boolean
    },
    displayKey: {
        type : String
    } ,
     userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'user'
    }
})
const display = mongoose.model("display", displaySchema);
export default display;