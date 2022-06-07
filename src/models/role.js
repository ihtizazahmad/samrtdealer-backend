import mongoose from "mongoose";
const roleSchema = new mongoose.Schema({
    id: {
        type:String
    },
    name: {
        type:String
    }
})
const role = mongoose.model('role', roleSchema)
export default role;