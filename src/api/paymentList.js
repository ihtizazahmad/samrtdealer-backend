import express from 'express'
import paymentlist from '../models/paymentList.js';
const router = express.Router()

router.get('/paymenttype', async (req, res) => {
    let data = await paymentlist.find(req.data);
    res.send(data);

})

router.post('/paymenttype/add', async (req, res) => {
    const { id, name, paymentGTypeId, inactive, defaultPayment, showCaption, updatedAt } = req.body;
    const data = await new paymentlist({ id, name, paymentGTypeId, inactive, defaultPayment, showCaption, updatedAt });
    await data.save().then(result => {
        console.log(result, "PaymentList data save to database")
        res.send("paymentList data saved to database");
    }).catch(err => {
        res.status(400).send('unable to save database');
        console.log(err)
    })
})
router.put('/paymenttype/edit/:id', async (req, res) => {
    // const data= await device();
    console.log(req.params.id)
    let data = await paymentlist.updateOne(
        req.params.id,
        {
            $set: req.body
        });
    res.status(data, 'data updated').send('data updated')
})

export default router;