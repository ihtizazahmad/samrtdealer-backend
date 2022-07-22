
import mongoose from 'mongoose';

const posmenuitemSchema = new mongoose.Schema({
    
    id:{
       type:Number
    },
    level: {
        type: String
    },
    row: {
        type: String
    },
    column: {
        type: String
    },

    category:
        [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'category'
        }],
    product: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product'
    }]

})
const posmenuitem = mongoose.model('posmenuitem', posmenuitemSchema);
export default posmenuitem;