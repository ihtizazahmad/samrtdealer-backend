import mongoose from 'mongoose';
const orderSchema = new mongoose.Schema({

   
    id: {
        type: String
    },
    tableId: {
        type: String
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
        type: String, enum : ['new', 'processing', 'done']
    },
    orderType: {
        type: String, enum : ['standard', 'notification']
    }


})
const order = mongoose.model('order', orderSchema);
export default order;