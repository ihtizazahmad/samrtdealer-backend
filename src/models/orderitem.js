import mongoose from 'mongoose';
const orderItemSchema = new mongoose.Schema({

   
    id: {
        type: String
    },

    orderId: {
        type: String
    
    },

needToPrintQty: {

        type: Number
    },

    productId: {
        type: String
    
    },
        
    points: {
        type: Number
    },


    taxValue: {
        type: Number
    },
    quantity: {
        type: Number
    },

    priceExclTax: {
        type: Number
    },

    price: {
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


    productName: {
        type: String
    },


    text: {
        type: String
    }
})
const orderitem = mongoose.model('orderitem', orderItemSchema);
export default orderitem;