import mongoose from 'mongoose';
const orderItemSchema = new mongoose.Schema({
    points: {
        type: Number
    },
    taxValue: {
        type: Number
    },
    orderId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "order"
    }],
    product: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "product"
    }],

    priceExclTax: {
        type: Number
    },

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
    text: {
        type: String
    }
})
const orderitem = mongoose.model('orderitem', orderItemSchema);
export default orderitem;