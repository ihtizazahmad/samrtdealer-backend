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
    categoryName: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "category"
    }],
    categoryParents: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "parentcategory"
    }],
    quantity:{
        type:Number
    },
    barCode: {
        type: String
    },
    name: {
        type: String
    },
    price: {
        type: Number
    },
    shortDescription: {
        type: String
    },
    fullDescription: {
        type: String
    },
    order: {
        type: Number
    },
    active: {
        type: Boolean
    },
    categoryId:
        [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'category'
        }],
    hasPicture: {
        type: Boolean
    },
    productPictureId: {
        type: String
    },
    productType: {
        type: String
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'user'
    },

})
const product = mongoose.model('product', productSchema)
export default product;