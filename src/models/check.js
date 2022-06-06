import mongoose from 'mongoose';
const checkSchema = new mongoose.Schema({
    id: {
        type: String
    },
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
    table: {
        type: String
    },
    checkDate: {
        type: Date,
        default: Date.now
    }
});

const check = mongoose.model("check", checkSchema);
export default check;