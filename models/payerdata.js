const mongoose = require('mongoose');

const payerSchema = new mongoose.Schema({
    FirstName: {
        type: String
    },
    LastName: {
        type: String
    },
    Telephone: {
        type: Number
    },
    Address: {
        type: String
    },
    City: {
        type: String
    },
    State: {
        type: String
    },
    ZIP: {
        type: Number
    },
    Email: {
        type: String,
    },
    Membership: {
        type: String,
    },
    CustomerId: {
        type: String,
    },
    Company: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now,
    }


})

module.exports = mongoose.model("payer",payerSchema );