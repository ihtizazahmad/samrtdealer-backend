import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({

    name: {
        type: String
    },
    description: {
        type: String
    },
    categoryParents: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "parentcategory"
    }],
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
      }
    

},{timestamps:true})
const product = mongoose.model('product', productSchema)
export default product;