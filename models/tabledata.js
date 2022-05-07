const mongoose = require('mongoose');

const tableSchema = new mongoose.Schema({
    TableNo: {
        type: Number,
        required: true
    },
    Name: {
        type: String,
        required: true
    },
    Price: {
        type: Number,
        required: true
    },
    RecordDate: {
        type: Date,
        default: Date.now
    }
    
})
module.exports = mongoose.model("table", tableSchema);