import mongoose from 'mongoose';

const smsMarketingSchema = new mongoose.Schema({
    number: {
        type: [String]
    },
    message: {
        type: String
    },
    // userId:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     required:true,
    //     ref:'user'
    // },
})
const smsMarketing = mongoose.model("smsMarketing", smsMarketingSchema);
export default smsMarketing;