import mongoose from 'mongoose';
const employeeSchema = new mongoose.Schema({
    userName: {
        type: String
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },  
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'user'
    },
    password: {
        type: Number
    },
    role:{
        type:String,
        default:'employee'
    }
})
const employee = mongoose.model("employee", employeeSchema);
export default employee;