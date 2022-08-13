import mongoose from 'mongoose'


const customerSchema = new mongoose.Schema({
    CustomerId: {
        type: Number
    },
    FirstName: {
        type: String
    },
    LastName: {
        type: String
    },
    Phone: {
        type: String
    },
    Address1: {
        type: String
    },
    Address2: {
        type: String
    },
    Address3: {
        type: String
    },
    PostalCode: {
        type: Number
    },
    City: {
        type: String
    },
    State: {
        type: String
    },
    CompanyName: {
        type: String
    },
    Email: {
        type: String
    }  ,
    Membership:{
        type:String
    } 

})
 
const customer=mongoose.model('customer',customerSchema);
export default customer;

