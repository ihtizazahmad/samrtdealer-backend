import mongoose from 'mongoose';
const employeeSchema = new mongoose.Schema({
    id: {
        type: String
    },
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
    role: {
        type: String, enum : ['customer', 'employee']
    },
    password: {
        type: String
    },
    confirmPassword: {
        type: String
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
})
const employee = mongoose.model("employee", employeeSchema);
export default employee;