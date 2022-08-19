import mongoose from 'mongoose';
const orderItemSchema = new mongoose.Schema({
    needToPrintQty: {
        
        type: Number
    },
    points: {
        type: Number
    },
    taxValue: {
        type: Number
    },
    productQuantity: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "product"
    }],
    orderId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "order"
    }],
    productId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "product"
    }],

    priceExclTax: {
        type: Number
    },

    productPrice:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "product"
    }],
    lineValueExclTax: {
        type: Number
    },

    lineValueTax: {
        type: Number
    },

    lineValue: {
        type: Number
    },

    units: {
        type: Number
    },
    productName:[{
        type:mongoose.Schema.Types.ObjectId,
        ref: "product"
    }],
    text: {
        type: String
    }
})
const orderitem = mongoose.model('orderitem', orderItemSchema);
export default orderitem;