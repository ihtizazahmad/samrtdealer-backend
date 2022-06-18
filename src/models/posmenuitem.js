import mongoosecategory from './category.js'
import mongoose from 'mongoose';
// import category from '../models/category.js'
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
    category: {
        type: Schema.Types.ObjectId, ref: 'category'
    },
    products: {
        type: String
    }

  
})
const posmenuitem = mongoose.model('posmenuitem', posmenuitemSchema);
export default posmenuitem;