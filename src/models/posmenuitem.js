
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const posmenuitemSchema = new mongoose.Schema({
    id: {
        type:String
    },
    level: {
        type: String
    },
   
    category: 
        [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'category'
        }]
    ,
//     product:
        
// [{
//         type: mongoose.Schema.Types.ObjectId,
//     ref: 'product'
//     }]

  
})
const posmenuitem = mongoose.model('posmenuitem', posmenuitemSchema);
export default posmenuitem;