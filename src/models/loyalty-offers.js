import mongoose from "mongoose";
const loyaltySchema = new mongoose.Schema({
    name: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product'
    },
    productQty: {
        productId: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'product'
        }],
        quantity: {
            type: [Number]
        }
    },
    description: {
        type: String
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'user'
    }
})
const loyaltyModel=new mongoose.model("loyalty",loyaltySchema)
export default loyaltyModel;