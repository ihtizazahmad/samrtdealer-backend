import mongoose from "mongoose";
const roleSchema = new mongoose.Schema({
   
    name: {
       type:String
    }
})
const role = mongoose.model('role', roleSchema)
export default role;