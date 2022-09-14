import mongoose from 'mongoose';
const menuSchema = new mongoose.Schema({
   
    links: {
        type: String
    },
    sublinks: [{
        type:String
    }],
    color: {
        type: String
    },
    userId:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    }]

})
const menu = mongoose.model('menu', menuSchema);
export default menu;