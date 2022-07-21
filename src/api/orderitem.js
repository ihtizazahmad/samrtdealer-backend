
import express from 'express'
import orderitem from '../models/orderitem.js'

const router = express.Router()

router.get('/orderitem', async (req, res) => {
    let data = await orderitem.find(req.params).populate('order').populate('product').select('name');
    res.send(data);

})

router.post('/orderitem', async (req, res) => {
    const { orderId, needToPrintQty, productId, points, taxValue, quantity, priceExclTax, price, lineValueExclTax, lineValueTax, lineValue, units, productName, text } = req.body;
    const data = await new orderitem({ orderId, needToPrintQty, productId, points, taxValue, quantity, priceExclTax, price, lineValueExclTax, lineValueTax, lineValue, units, productName, text });
    await data.save().then(result => {
        console.log(result, "OrderItem data save to database")
        res.send("OrderItem data saved to database");
    }).catch(err => {
        res.status(400).send('unable to save database');
        console.log(err)
    })
})
router.put('/orderitem/:_id', async (req, res) => {
    
    console.log(req.params.id)
    let data = await orderitem.findByIdAndUpdate(
        {_id:req.params._id},{
            $push:{orderId:req.body.orderId,productName:req.body.productName}
        },
        {new:true}
        );
    
    if (data) {
        res.send({ message: "orderitem data updated successfully" });
    }
    else {
        res.send({ message: "orderitem data cannot be updated successfully" })
    }
})

router.delete('/orderitem/:_id', async (req, res) => {
    console.log(req.params)
    let data = await orderitem.deleteOne(req.params)
    // res.send(data)
    if (data) {
        res.send({ message: "orderitem data delete successfully" });
    }
    else {
        res.send({ message: "orderitem data cannot delete successfully" })
    }
})

export default router;
