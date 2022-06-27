import category from './category.js'
import mongoose from 'mongoose';
const Schema = mongoose.Schema;
// import category from '../models/category.js'
// import category from './models/category.js';
const posmenuitemSchema = new mongoose.Schema({
    id: {
        type:String
    },
   
    category: 
        [{
            type: Schema.Types.ObjectId, ref: 'category'
        }]
    ,
    products: {
        type: String
    }

  
})
const posmenuitem = mongoose.model('posmenuitem', posmenuitemSchema);
export default posmenuitem;