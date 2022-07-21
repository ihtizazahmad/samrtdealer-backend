import mongoose from 'mongoose';
const orderSchema = new mongoose.Schema({
    tableId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"tables"
    },
    orderDate: {
        type: Date
    },
    startDate: {
        type: Date
    },
    orderNo: {
        type: Number
    },
    points: {
        type: Number
    },
    orderValueExclTax: {
        type: Number
    },
    orderValueTax: {
        type: Number
    },
    orderValue: {
        type: Number
    },
    tableNo: {
        type: Number
    },
    parentOrderNo: {
        type: Number
    },
    orderStatus: {
        type: String, 
    },
    orderType: {
        type: String, 
    }


})
const order = mongoose.model('order', orderSchema);
export default order;