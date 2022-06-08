import mongoose from 'mongoose';

const posMenuSize=new mongoose.Schema({
    id:{
        type:String
  
},
    name:{
        type:String
       
},
    column:{
        type:Number
        
},
    rows:{
        type:Number
      
},
})
const posMenuSizes=mongoose.model('posMenuSize',posMenuSize);
export default posMenuSizes;