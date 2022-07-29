import mongoose from "mongoose";
const posMenuSizeSchema=new mongoose.Schema({
    name:String,
    row:Number,
    column:Number
})
const posMenuSize=mongoose.model('posMenuSize',posMenuSizeSchema)
export default posMenuSize;