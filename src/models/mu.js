import mongoose from 'mongoose';

const muSchema = new mongoose.Schema({
    code: {
        type: String
    },
    name: {
        type: String
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'user'
    },
})
const mu = mongoose.model("mu", muSchema);
export default mu;