import mongoose from 'mongoose';
const loyaltySchema = new mongoose.Schema({
    CardNo: {
        type: Number
    },
    Type: {
        type: String
    },
    StartDate: {
        type: Date,
        default: Date.now()
    },
    ExpiresIn: {
        type: Date
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
    Gender: {
        type: String
    },
    History: [{
        type: String
    }],
    Notes: [{
        type: String
    }],

})
const loyalty=new mongoose.model('loyalty',loyaltySchema);
export default loyalty;