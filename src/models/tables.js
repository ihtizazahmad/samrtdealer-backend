import mongoose from 'mongoose';
const tablesSchema = new mongoose.Schema({
    tableNo: {
        type: Number
    },
    tableName: {
        type: String
    },
    description: {
        type: String
    },
    hasLampixDevice: {
        type: Boolean,
        default:'false'
    },
    operator: {
        type: [mongoose.Schema.Types.ObjectId],
        ref:'model_Type'
    },
    model_Type:{
        type:String,
        enum:['user','employee']
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'user'
    },
    Amount: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'orderitem'
    },
    RecordDate: {
        type: Date,
        default: Date.now
    }
})
const tables = mongoose.model("tables", tablesSchema);
export default tables;
