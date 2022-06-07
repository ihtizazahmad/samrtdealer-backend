import mongoose from 'mongoose';
const displaySchema = new mongoose.Schema({
    id: {
        type : String,
    },
    name: {
        type : String
    },
    order: {
        type : String
    },
    systemDisplay: {
        type : Boolean
    },
    displayKey: {
        type : String
    }
})
const display = mongoose.model("display", displaySchema);
export default display;