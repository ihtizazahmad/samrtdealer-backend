import mongoose from 'mongoose';
const taxSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    taxValue: {
        type: String,
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'user'
    }
})
const tax = mongoose.model('tax', taxSchema)
export default tax;