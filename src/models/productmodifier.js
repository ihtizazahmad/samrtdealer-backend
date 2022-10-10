import mongoose from "mongoose";
const productModifierSchema=new mongoose.Schema({
    CupSize:{
        type:String,
        enum:['small','16 oz','20 oz']
    },
    
    
})
const productModifierModel=mongoose.model("productModifier",productModifierSchema)
export default productModifierModel;