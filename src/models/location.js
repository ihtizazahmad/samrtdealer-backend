import mongoose from 'mongoose';

const villageLocSchema = new mongoose.Schema({
    name: {
        type: String
    },
    tehsil:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'tehsilLocation'
    }
}, { timestamps: true })

const tehsilLocSchema = new mongoose.Schema({
    name: {
        type: String
    },
    district:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'districtLocation'   
    }

}, { timestamps: true })

const districtLocSchema = new mongoose.Schema({
    name: {
        type: String
    },
    province:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'provinceLocation'  
    }
}, { timestamps: true })

const provinceLocSchema = new mongoose.Schema({
    name: {
        type: String
    },

}, { timestamps: true })

export const vLocation = mongoose.model("villageLocation", villageLocSchema);
export const tLocation = mongoose.model("tehsilLocation", tehsilLocSchema);
export const dLocation = mongoose.model("districtLocation", districtLocSchema);
export const pLocation = mongoose.model("provinceLocation", provinceLocSchema);
