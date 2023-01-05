import mongoose from 'mongoose';

const villageLocSchema = new mongoose.Schema({
    name: {
        type: String
    }
}, { timestamps: true })

const tehsilLocSchema = new mongoose.Schema({
    name: {
        type: String
    }
}, { timestamps: true })

const districtLocSchema = new mongoose.Schema({
    name: {
        type: String
    }
}, { timestamps: true })

const provinceLocSchema = new mongoose.Schema({
    name: {
        type: String
    }
}, { timestamps: true })

export const vLocation = mongoose.model("villageLocation", villageLocSchema);
export const tLocation = mongoose.model("tehsilLocation", tehsilLocSchema);
export const dLocation = mongoose.model("tehsilLocation", districtLocSchema);
export const pLocation = mongoose.model("tehsilLocation", provinceLocSchema);
