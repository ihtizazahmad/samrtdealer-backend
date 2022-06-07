import mongoose from 'mongoose';

const muSchema = new mongoose.Schema({
    id: {
        type: String
    },
    code: {
        type: String
    },
    name: {
        type: String
    }
})
const mu = mongoose.model("mu", muSchema);
export default mu;