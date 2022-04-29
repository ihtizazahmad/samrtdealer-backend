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
    
})