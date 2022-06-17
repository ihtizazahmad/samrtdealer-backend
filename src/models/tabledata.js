import mongoose from "mongoose";

const tabledataSchema = new mongoose.Schema({
    Id: {
        type: Number,
        required: true
    },
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
    RecordDate: {
        type: Date,
        default: Date.now
    }

})
const tabledata= mongoose.model("tabledata", tabledataSchema);
export default tabledata;