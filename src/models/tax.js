import mongoose from 'mongoose';
const taxSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    taxValue: {
        type: String,
    }
})
const tax = mongoose.model('tax', taxSchema)
export default tax;