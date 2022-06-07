import mongoose from 'mongoose';

const paymentlistSchema = new mongoose.Schema({
    id: {
        type: String
    },
    name: {
        type: String
    },
    paymentGTypeId: {
        type: String
    },

    
    inactive: {
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
    updatedAt: {
        type: Date

    }
})
const paymentlist = mongoose.model('paymentlist', paymentlistSchema);
export default paymentlist;