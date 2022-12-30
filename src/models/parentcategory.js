import mongoose from 'mongoose';
const parentCategorySchema = new mongoose.Schema({

    name: {
        type: String
    } 
}) 
const parentcategory = mongoose.model("parentcategory", parentCategorySchema);

export default parentcategory;