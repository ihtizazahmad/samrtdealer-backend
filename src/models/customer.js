import mongoose from 'mongoose'

const customerSchema = new mongoose.Schema({
    CustomerId: {
        type: Number
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
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
    },
    Membership: {
        type: String
    },
    Password:{
        type:String
    },
    ConfirmPassword:{
        type:String
    },
    CustomerLoyalty:{
        
    CardNo: {
        type: Number
    },
    Type: {
        type: String,
        enum:["client","employee"]
    },
    StartDate: {
        type: Date,
        default: Date.now
    },
    ExpiresIn: {
        type: Date
    },
    creditLimits:{
        type:Number
    },
    Communication: {
        mail: {
            type: Boolean
        },
        Email: {
            type: Boolean
        }
    },
    BirthDate: {
        type: Date
    },
    Points:{
      type:Number
    },
    Visits:{
        type:Number
    },
    LastVisit:{
         type:Date,
         default:Date
    },
    Purchases:{
      type:Number
    },
    Gender: {
        type: String
    },
    History: [{
        type: String
    }],
    Notes: [{
        type: String
    }]
}
})

const customer = mongoose.model('customer', customerSchema);
export default customer;

