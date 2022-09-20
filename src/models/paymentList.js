import mongoose from 'mongoose';

const paymentlistSchema = new mongoose.Schema({
    name: {
        type: String
    },
    paymentsGTypeId: {
        type: String
    }, 
    isActive: {
        type: Boolean
    },
    defaultPayment: {
        type: Boolean
    },
    showCaption: {
        type: Boolean
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'user'
    },
    updatedAt: {
        type: Date

    }
})
const paymentlist = mongoose.model('paymentlist', paymentlistSchema);
export default paymentlist;