const express = require('express');
const router = express.Router();
// const { default: mongoose } = require('mongoose');
const app = express();
const mongoose = require('mongoose');
// const payer = require('../models/payerdata');
// const user = mongoose.model('');

router.get('/table', (req, res) => {
    res.send('this is tables get api')
})
router.post('tables', (req, res) => {
    res.send('this is tables post api')
})
