import mongoose from 'mongoose';
const menuChildSchema = new mongoose.Schema({
    links: {
        type: String
    },
    sublinks: [{
        type:String
    }],

})
const menuChild = mongoose.model('menuChild', menuChildSchema);
export default menuChild;