import mongoose from 'mongoose';
const orderSchema = new mongoose.Schema({
    tableId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:"tables"
    }],
    orderDate: {
        type: Date
    },
    orderItems:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'orderitem'
    }],
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
    parentOrderNo: {
        type: Number
    },
    orderStatus: {
        type: String, 
        enum:['new','proccessing','done']
    },
    orderType: {
        type: String,
        enum:['standard','notification'] 
    }


})
const order = mongoose.model('order', orderSchema);
export default order;