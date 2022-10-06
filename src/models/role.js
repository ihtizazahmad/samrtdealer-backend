import mongoose from "mongoose";
const roleSchema = new mongoose.Schema({
   
    name: {
       type:String,
       enum:['admin','employee']
    }
})
const role = mongoose.model('role', roleSchema)
export default role;