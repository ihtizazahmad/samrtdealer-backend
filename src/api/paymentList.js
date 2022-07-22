import express from 'express'
import paymentlist from '../models/paymentList.js';
const router = express.Router()

router.get('/paymenttype', async (req, res) => {
    let data = await paymentlist.find(req.data);
    res.send(data);

})

router.post('/paymenttype', async (req, res) => {
    const { name, paymentsGTypeId, isActive, defaultPayment, showCaption, updatedAt } = req.body;
    const data = await new paymentlist({ name, paymentsGTypeId, isActive, defaultPayment, showCaption, updatedAt });
    await data.save().then(result => {
        console.log(result, "PaymentList data save to database")
        res.json({
            name: result.name,
            paymentsGTypeId: result.paymentsGTypeId,
            isActive: result.isActive,
            defaultPayment: result.defaultPayment,
            showCaption: result.showCaption,
            updatedAt: result.updatedAt
        })
        
    }).catch(err => {
        res.status(400).send('unable to save database');
        console.log(err)
    })
})
router.put('/paymenttype/:_id', async (req, res) => {
    console.log(req.params.id)
    let data = await paymentlist.updateOne(
        req.params,
        {
            $set: req.body
        });
    if (data) {
        res.send({ message: "paymentList data updated successfully" });
    }
    else {
        res.send({ message: "paymentList data cannot be updated successfully" })
    }
})
router.delete('/paymenttype/:_id', async (req, res) => {
    console.log(req.params)
    let data = await paymentlist.deleteOne(req.params)
    // res.send(data)
    if (data) {
        res.send({ message: "paymentList data delete successfully" });
    }
    else {
        res.send({ message: "paymentList data cannot delete successfully" })
    }
})



export default router;