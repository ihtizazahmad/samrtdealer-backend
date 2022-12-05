import mongoose from "mongoose";
const CustomizationSchema = new mongoose.Schema({

        name: {
            type: String
        },
        active: {
            type: Boolean,
            default: true
        },
    
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'user'
    }

})
const customizationModel = new mongoose.model('customization', CustomizationSchema)
export default customizationModel;