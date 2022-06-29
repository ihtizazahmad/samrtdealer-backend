import mongoose from 'mongoose';
const categorySchema = new mongoose.Schema({
   
    id: {
        type: String
    },
    name: {
        type: String
    },
    parent: {
        type: String
    },
    extraData: {
        type: String
    },
    categoryType: {
        type: String
    },
    displayMangerName: {
        type: String
    },
    order: {
        type: Number
    },
    hasPicture: {
        type: Boolean
    },
    active: {
        type: String
    },
    displayManagerId: {
        type: String
    },
    parentId: {
        type: String
    },
    lampixIcon: {
        type: String
    },
    translation: {
        type: String
    },
    product: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'product'
    }],
    showPictures: {
        type: Boolean
    },
    creatdateFormat: {
        type: Date,
        default: Date.now
    }
}) 
const category = mongoose.model("category", categorySchema);
export default category;