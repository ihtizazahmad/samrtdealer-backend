const express = require('express');
const router = express.Router();
// const { default: mongoose } = require('mongoose');
const app = express();
const mongoose = require('mongoose');
const payer = require('../models/payerdata');
const user = mongoose.model('payer');

router.get('/payer', async (req, res) => {
    const payer = await user.find(req.data);
    res.send(payer);
});


router.post('/payer', async (req, res) => {
    // console.log(req.body);
    // res.send('OK');
    const { FirstName, LastName,  Email, State, Company, ZIP, Telephone, Address, City, Membership, CustomerId  } = req.body;
    let data = new user({ FirstName, LastName, Email, State, Company, ZIP, Telephone, Address, City, Membership, CustomerId });
    // console.log('this is simple data ', data)
   await data.save().then(result => {
        console.log(result)
        res.json({ message: 'user data has been registered successfully' });

    }).catch(err => console.log(err))

})





module.exports = router