import express from 'express'
import order from '../models/order.js';

const router = express.Router();

router.get('/order', async (req, res) => {
    let data = await order.find(req.params).populate('tableId').select('_id').populate('tableNo').select('tableNo');
    res.send(data);

})

router.post('/order', async (req, res) => {
    const { tableId, orderNo, startDate, orderDate, points, orderValueExclTax, orderValueTax, orderValue, tableNo, parentOrderNo, orderStatus, orderType } = req.body;

    const data = await new order({ tableId, orderNo, startDate, orderDate, points, orderValueExclTax, orderValueTax, orderValue, tableNo, parentOrderNo, orderStatus, orderType });
    await data.save().then(result => {
        console.log(result, "Order data save to database")
        res.send("Order data saved to database");
    }).catch(err => {
        res.status(400).send('unable to save database');
        console.log(err)
    })
})
router.put('/order/:_id', async (req, res) => {
    console.log(req.params)
    let data = await order.findByIdAndUpdate(
        {_id:req.params._id},{
            $push:{tableId:req.body.tableId,tableNo:req.body.tableNo}
        },
        {new:true}
       );
    
    if (data) {
        res.send({ message: "order data updated successfully" });
    }
    else {
        res.send({ message: "order data cannot be updated successfully" })
    }
})

router.delete('/order/:_id', async (req, res) => {
    console.log(req.params)
    let data = await order.deleteOne(req.params)
    if (data) {
        res.send({ message: "order data delete successfully" });
    }
    else {
        res.send({ message: "order data cannot delete successfully" })
    }
})


export default router;