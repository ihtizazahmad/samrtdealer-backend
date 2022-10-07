import mongoose from "mongoose";
const productModifierSchema=new mongoose.Schema({
    unitOfMeasurements:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'mu'
    },
    shots:{
        type:Number
    },
    cups:{
        type:String,
        enum:['half','medium','full']
    },

})
const productModifierModel=mongoose.model("productModifier",productModifierSchema)
export default productModifierModel;