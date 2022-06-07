import mongoose from 'mongoose';
const languageSchema = new mongoose.Schema({

   
    id: {
        type: String
    },
    name: {
        type: String
    },
    code: {
        type: String
    },
    languageCulture: {
        type: String
    },
    flagImageFileName: {
        type: String
    },
    rtl: {
        type: Boolean
    },
    published: {
        type: Boolean
    },
    displayOrder: {
        type: Number
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
})
const language = mongoose.model("language", languageSchema);
export default language;