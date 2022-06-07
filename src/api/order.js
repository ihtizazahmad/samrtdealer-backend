import express from 'express'
import order from '../models/order.js';

const router = express.Router();

router.get('/order', async (req, res) => {
    let data = await order.find(req.data);
    res.send(data);

})

router.post('/order', async (req, res) => {
    const { id, tableId, orderNo, startDate, orderDate, points, orderValueExclTax, orderValueTax, orderValue, tableNo, parentOrderNo, orderStatus, orderType } = req.body;
    const data = await new order({ id, tableId, orderNo, startDate, orderDate, points, orderValueExclTax, orderValueTax, orderValue, tableNo, parentOrderNo, orderStatus, orderType });
    await data.save().then(result => {
        console.log(result, "Order data save to database")
        res.send("Order data saved to database");
    }).catch(err => {
        res.status(400).send('unable to save database');
        console.log(err)
    })
})
router.put('/order/:id', async (req, res) => {
    // const data= await device();
    console.log(req.params)
    let data = await order.updateOne(
        req.params.id,
        {
            $set: req.body
        });
    res.status(data, 'data updated').send('data updated')
})


export default router;