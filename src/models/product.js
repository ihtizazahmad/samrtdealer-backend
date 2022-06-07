import mongoose from 'mongoose';
const productSchema = new mongoose.Schema({

    
    id: {
        type: String
    },
    categoryName: {
        type: String
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
    inHouseTaxValue: {
        type: Number
    },
    takeawayTaxValue: {
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
    categoryId: {
        type: String
    },
    inHouseTaxId: {
        type: Number
    },
    takeawayTaxId: {
        type: Number
    },
    hasPicture: {
        type: Boolean
    },
    extraData: {
        type: String
    },
    translations: {
        type: String
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