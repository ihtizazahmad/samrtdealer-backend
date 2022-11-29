import mongoose from "mongoose";
const CustomizationSchema = new mongoose.Schema({
    components: {
        name: {
            type: String
        },
        active: {
            type: Boolean,
            default: true
        }
    },
    tax: {
        name:{
            type:String
        },
        active: {
            type: Boolean,
            default: true
        }
    },
    itemDiscount: {
        name:{
            type:String
        },
        active: {
            type: Boolean,
            default: true
        }
    },
    RecieptDiscount: {
        name:{
            type:String
        },
        active: {
            type: Boolean,
            default: true
        }
    },
    ManagerDiscount: {
        name:{
            type:String
        },
        active: {
            type: Boolean,
            default: true
        }
    },
    currency: {
        name:{
            type:String
        },
        active: {
            type: Boolean,
            default: true
        }
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'user'
    }

})
const customizationModel = new mongoose.model('customization', CustomizationSchema)
export default customizationModel;