import mongoose from 'mongoose';

const muSchema = new mongoose.Schema({
    code: {
        type: String
    },
    name: {
        type: String
    }
})
const mu = mongoose.model("mu", muSchema);
export default mu;