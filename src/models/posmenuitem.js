import mongoose from 'mongoose';
// import category from './models/category.js';
const posmenuitemSchema = new mongoose.Schema({
    id: {
        type:String
    },
    row: {
        type:Number
    },
    column: {
        type:Number
    },
  
})
const posmenuitem = mongoose.model('posmenuitem', posmenuitemSchema);
export default posmenuitem;