import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({

    lavel: {
        type: Number
    },
    rows: {
        type: Number
    },
    cols: {
        type: Number
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
    totalQuantity:{
        type: String
    },
    barCode: {
        type: String
    },
    name: {
        type: String
    },
    price: {
        type: String
    },
    retailPrice: {
        type: String
    },
    shortDescription: {
        type: String
    },
    fullDescription: {
        type: String
    },
    order: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'order'
    },
    active: {
        type: String
    },
    categoryId:
        [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'category'
        }],
   Product_pic: {
        type: String,
    },
    productPictureId: {
        type: String
    },
    productType: {
        type: String
    },
    hasPicture:{
     type: String,
     default:'false',
     enum:['true','false']
    }

})
const product = mongoose.model('product', productSchema)
export default product;