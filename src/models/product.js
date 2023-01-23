import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({

    name: {
        type: String
    },
    description: {
        type: String
    },
    category: {
        type:String
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'user'
    },
    price: {
        type: String
    },
    discountOnProduct: {
        type: String
    },
   Product_pic: {
        type: String,
    },
    isActive:{
        type:Boolean,
        default:true
      },
      formula:{
        type:String
      }
    

},{timestamps:true})
const product = mongoose.model('product', productSchema)
export default product;