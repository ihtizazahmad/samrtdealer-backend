import mongoose from 'mongoose';
const menuSchema = new mongoose.Schema({

    treeData: {
        type: Array
    },
    userId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }]

})
const menu = mongoose.model('menu', menuSchema);
export default menu;