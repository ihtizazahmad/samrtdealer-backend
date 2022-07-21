import mongoose from 'mongoose';
const checkSchema = new mongoose.Schema({
  
    checkNo: {
        type: Number
    },
    operator: {
        type: String
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