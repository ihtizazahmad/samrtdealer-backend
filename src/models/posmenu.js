import mongoose from 'mongoose';

const posMenuSchema = new mongoose.Schema({
    name: {
        type: String
        
    },
    comments: {
        type: String

    },
    active: {
        type: Boolean
    },
 
    firstColumnFixed: {
        type: Boolean

    }
    
})
const posMenu = mongoose.model('posMenu', posMenuSchema);
export default posMenu;