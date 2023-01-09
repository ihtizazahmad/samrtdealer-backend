import mongoose from 'mongoose';
const orderItemSchema = new mongoose.Schema({
    totalAmount: {
        type: Number
    },
    address:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"villageLocation"
    },
    addressDetail:{
        type:String
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'retaileruser'
    },
    productDetail: [{
        productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product",
        },
        qty: {
            type: Number
        },
        discount: {
            type: Number
        },

    }]
},{timestamps:true})
const orderitem = mongoose.model('orderitem', orderItemSchema);
export default orderitem;

