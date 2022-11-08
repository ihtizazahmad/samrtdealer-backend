import mongoose from 'mongoose';
const orderSchema = new mongoose.Schema({
    tableNo: {
        type:Number
    },
    tableName:{
        type:String
    },
    orderNo:{
        type:Number
    },
    distype:{
        type:Boolean,
    },
    discount:{
        type:Number
    },
    orderDate: {
        type: Date,
        default:Date.now
    },
    startDate: {
        type: Date,
        default:Date.now
    },
    currentOrderId: {
        type: String
    },
    isHold:{
       type:Boolean,
       default:false
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
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'user'
    },
    operator:{
        type:String
    },
    customerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'customer'
    }


})
const order = mongoose.model('order', orderSchema);
export default order;
