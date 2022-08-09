import mongoose from 'mongoose';
const deivceSchema = new mongoose.Schema({
    name: {
        type: String
    },
    createdDate: {
        type: Date,
        default: Date.now()
    }
})
const device = mongoose.model("device", deivceSchema);
export default device;