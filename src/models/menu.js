import mongoose from 'mongoose';
const menuSchema = new mongoose.Schema({

    treeData: {
        type: Array
    } ,
    //  userId:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:'user',
    //     required:true,
    // },
    superUserId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'superUser'
    }

})
const menu = mongoose.model('menu', menuSchema);
export default menu;