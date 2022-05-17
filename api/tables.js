const express = require('express');
const router = express.Router();
// const { default: mongoose } = require('mongoose');
const app = express();
const mongoose = require('mongoose');
const table = require('../models/tabledata');
const user = mongoose.model('table');

router.get('/table', async (req, res) => {
    console.log("this is get api of table")
    const table = await user.find(req.data);
    res.send(table);


})
router.post('/table', async(req, res) => {
    const {Id,Operater, TableNo, TableName, Amount} = req.body;
    let data = new user({Id,Operater, TableNo, TableName, Amount });
    await data.save().then(result => {
        console.log(result, "item save to database")
        res.send("item saved to database");

    }).catch(err => {
        res.status(400).send("unable to save to database");
        console.log(err)
    });

})

module.exports = router