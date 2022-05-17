const mongoose = require('mongoose');

const tableSchema = new mongoose.Schema({
    Id: {
        type: Number,
        required: true
    },
    Operater: {
        type: String,
        required: true
    },
    TableNo: {
        type: Number,
        required: true
    },
    TableName: {
        type: String,
        required: true
    },
    Amount: {
        type: Number,
        required: true
    },
    RecordDate: {
        type: Date,
        default: Date.now
    }

})
module.exports = mongoose.model("table", tableSchema);