import mongoose from 'mongoose';
const menuSchema = new mongoose.Schema({
    header: {
        type: String
    },
    icon: {
        type: String
    },
    link: {
        type: String
    },
    titles: {
        type: String
    },
    sublinks: {
        type: Array
    },
    target: {
        type: String
    },
    external: {
        type: Boolean
    },
    description: {
        type: String
    },
    order: [{
        type:mongoose.Schema.Types.ObjectId,
        ref:"order"
    }],
    translationKey: {
        type: String
    },
    color: {
        type: String
    },
    createdDate: {
        type: Date,
        default: Date.now
    }

})
const menu = mongoose.model('menu', menuSchema);
export default menu;