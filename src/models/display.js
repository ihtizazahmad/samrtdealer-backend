import mongoose from 'mongoose';
const displaySchema = new mongoose.Schema({
    name: {
        type : String
    },
    order: [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "order"
    }],
    systemDisplay: {
        type : Boolean
    },
    displayKey: {
        type : String
    }
})
const display = mongoose.model("display", displaySchema);
export default display;