import mongoose from 'mongoose';
const tablesSchema = new mongoose.Schema({
    tableNo: {
        type: Number
    },
    name: {
        type: String
    },
    description: {
        type: String
    },
    hasLampixDevice: {
        type: Boolean
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'user'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})
const tables = mongoose.model("tables", tablesSchema);
export default tables;
