import mongoose from 'mongoose';
const checkSchema = new mongoose.Schema({
  
    checkNo: {
        type: Number
    },
    operator: {
        type: [mongoose.Schema.Types.ObjectId],
        ref:'model_Type'
    },
    model_Type:{
        type:String,
        enum:['user','employee']
    },
    subTotal: {
        type: Number
    },
    tax: {
        type: Number
    },
    amount: {
        type: Number
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'user',
    },
    table: [{
        type:mongoose.Schema.Types.ObjectId,
        ref:"tables" 
    }],
    checkDate: {
        type: Date,
        default: Date.now
    }
});

const check = mongoose.model("check", checkSchema);
export default check;