import mongoose from "mongoose";

const tabledataSchema = new mongoose.Schema({
    Operator: {
        type: String,
        required: true
    },
    TableNo: {
        type: Number,
        required: true
    },
    TableName: {
        type: String,
        required: true
    },
    Amount: {
        type: Number,
        required: true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'user'
    },
    RecordDate: {
        type: Date,
        default: Date.now
    }

})
const tabledata= mongoose.model("tabledata", tabledataSchema);
export default tabledata;