import express from 'express';
import payer from '../models/payerdata.js';
import userModel from '../models/User.js';

const router = express.Router();


router.get('/', (req, res) => {
    res.send({ "Hi": 'this patron api' })

})

router.get('/payer', async (req, res) => {
    let data = await payer.find(req.data);
    res.send(data);

});


router.post('/payer', async (req, res) => {
    const { FirstName, LastName, Email, State, Company, ZIP, Telephone, Address, City, Membership, CustomerId } = req.body;
    let data = new payer({ FirstName, LastName, Email, State, Company, ZIP, Telephone, Address, City, Membership, CustomerId });
    await data.save().then(result => {
        console.log(result, "Form save to database")
        res.json({
            FirstName: result.FirstName,
            LastName: result.LastName,
            Email: result.Email,
            State: result.State,
            Company: result.Company,
            ZIP: result.ZIP,
            Telephone: result.Telephone,
            Address: result.Address,
            City: result.City,
            Membership: result.Membership,
            CustomerId: result.CustomerId
        })
    }).catch((err) => {
        res.status(400).send("unable to save to database");
        console.log(err)
    })
    const resEmail = await payer.findOne({ Email });
        if (resEmail) {
            console.log("this mail is also regiter", resEmail)
            return res.send("this user is already registered")
        }

    await data.save().then(result => {
        console.log(result)
        res.json({ message: 'user data has been registered successfully' });

    }).catch(err => console.log(err));


})
router.put('/payer/:_id', async (req, res) => {
    await payer.updateOne(
        req.params,

        { $set: req.body }
    ).then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
    });
    // if (data) {
    //     res.send({ message: "payer data updated successfully" });
    // }
    // else {
    //     res.send({ message: "payer data cannot be updated successfully" })
    // }

})
router.delete('/payer/:_id', async (req, res) => {
    console.log(req.params)
    let data = await payer.deleteOne(req.params)
    // res.send(data)
    if (data) {
        res.send({ message: "payer data delete successfully" });
    }
    else {
        res.send({ message: "payer data cannot delete successfully" })
    }
})

router.get('/search/:key', async (req, res) => {
    console.log(req.params.key)
    let data = await payer.find(
        {
            "$or": [
                { "Email": { $regex: req.params.key } }
            ]
        }
    )
    res.send(data);

})



export default router