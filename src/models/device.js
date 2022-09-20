import mongoose from 'mongoose';
const deivceSchema = new mongoose.Schema({
    name: {
        type: String
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'user'
    },
    createdDate: {
        type: Date,
        default: Date.now()
    }
})
const device = mongoose.model("device", deivceSchema);
export default device;