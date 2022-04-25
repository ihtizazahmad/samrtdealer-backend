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
    if (!FirstName ||!LastName || !Email || !State || !Company || !ZIP || !Telephone || !Address || !City || !Membership || !CustomerId) {
        return res.send("Please provide all the fields")
    }
    const resEmail = await user.findOne({ Email });
    // const resEmail = await user.findOne({ $or: [{ Email: Email }, { CustomerId: CustomerId }] })
    {

        // console.log("this is responce of email", resEmail)
        if (resEmail) {
            console.log("this mail is also regiter", resEmail)
            return res.send("this user is already registered")
        }
    }
    // console.log('this is simple data ', data)
   await data.save().then(result => {
        console.log(result)
        res.json({ message: 'user data has been registered successfully' });

    }).catch(err => console.log(err))

})





module.exports = router