import mongoose from 'mongoose';
const tablesSchema = new mongoose.Schema({
    id: {
        type: String
    },
    tableNo: {
        type: Number
    },
    name: {
        type: String
    },
    description: {
        type: String
    },
    hasLampixDevice: {
        type: Boolean
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})
const tables = mongoose.model("tables", tablesSchema);
export default tables;
