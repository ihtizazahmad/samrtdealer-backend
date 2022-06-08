


import express from 'express'
import orderitem from '../models/orderitem.js'

const router = express.Router()

router.get('/orderitem', async (req, res) => {
    let data = await orderitem.find(req.data);
    res.send(data);

})

router.post('/orderitem', async (req, res) => {
    const { id, orderId, needToPrintQty, productId, points, taxValue, quantity, priceExclTax, price, lineValueExclTax, lineValueTax, lineValue, units, productName, text } = req.body;
    const data = await new orderitem({ id, orderId, needToPrintQty, productId, points, taxValue, quantity, priceExclTax, price, lineValueExclTax, lineValueTax, lineValue, units, productName, text });
    await data.save().then(result => {
        console.log(result, "OrderItem data save to database")
        res.send("OrderItem data saved to database");
    }).catch(err => {
        res.status(400).send('unable to save database');
        console.log(err)
    })
})
router.put('/orderitem/:_id', async (req, res) => {
    // const data= await device();
    console.log(req.params)
    let data = await orderitem.updateOne(
        req.params,
        {
            $set: req.body
        });
    res.status(data, 'data updated').send('data updated')
})

router.delete('/orderitem/:_id', async (req, res) => {
    console.log(req.params)
    let data = await orderitem.deleteOne(req.params)
    res.send(data)
})

export default router;
