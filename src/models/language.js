import mongoose from 'mongoose';
const languageSchema = new mongoose.Schema({

   
    name: {
        type: String
    },
   
    createdDate: {
        type: Date,
        default: Date.now
    }
})
const language = mongoose.model("language", languageSchema);
export default language;