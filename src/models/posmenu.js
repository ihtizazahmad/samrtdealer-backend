import mongoose from 'mongoose';
// import posMenuItems from './posMenuItem.js';
// import posMenuSizes from './posMenuSize.js';

const posMenuSchema = new mongoose.Schema({

    id: {
        type: String
        
    },
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