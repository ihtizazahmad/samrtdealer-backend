import mongoose from 'mongoose';
const productSchema = new mongoose.Schema({
   
    categoryName: [{
        type:mongoose.Schema.Types.ObjectId,
        ref:"category"
    }],
    categoryParents: [{
        type:mongoose.Schema.Types.ObjectId,
        ref:"parentcategory"
    }],
    barCode: {
        type: String
    },
    name: {
        type: String
    },
    price: {
        type: Number
    },
    inHouseTaxValue: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'tax'
    },
    takeawayTaxValue: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'tax'
    },
    shortDescription: {
        type: String
    },
    fullDescription: {
        type: String
    },
    order: {
        type:Number
    },
    active: {
        type: Boolean
    },
    categoryId:
   [{
    type:mongoose.Schema.Types.ObjectId,
    ref:'category'
   }],
    inHouseTaxId: {
        type: mongoose.Schema.Types.ObjectId,
         ref:'tax'
    },
    takeawayTaxId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'tax'
    },
    hasPicture: {
        type: Boolean
    },
    productPictureId: {
        type: String
    },
    productType: {
        type: String
    }

})
const product = mongoose.model('product', productSchema)
export default product;