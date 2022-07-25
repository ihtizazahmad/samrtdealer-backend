
import express from 'express'
import orderitem from '../models/orderitem.js'

const router = express.Router()

router.get('/orderitem', async (req, res) => {
    let data = await orderitem.find(req.params).populate('orderId','_id').populate('productId','_id')
    res.send(data);

})
router.get('/orderitem/_id', async (req, res) => {
    let data = await orderitem.findOne(req.params).populate('orderId','_id').populate('productId','_id')
    res.send(data);

})

router.post('/orderitem', async (req, res) => {
    const { orderId, needToPrintQty, productId, points, taxValue, quantity, priceExclTax, price, lineValueExclTax, lineValueTax, lineValue, units, productName, text } = req.body;
    const data = await new orderitem({ orderId, needToPrintQty, productId, points, taxValue, quantity, priceExclTax, price, lineValueExclTax, lineValueTax, lineValue, units, productName, text });
    await data.save().then(result => {
        console.log(result, "OrderItem data save to database")
        res.json({
            orderId: result.orderId,
            needToPrintQty: result.needToPrintQty,
            productId: result.productId,
            points: result.points,
            taxValue: result.taxValue,
            quantity: result.quantity,
            priceExclTax: result.priceExclTax,
            price: result.price,
            lineValueExclTax: result.lineValueExclTax,
            lineValueTax: result.lineValueTax,
            lineValue: result.lineValue,
            units: result.units,
            productName: result.productName,
            text: result.text
        })
    }).catch(err => {
        res.status(400).send('unable to save database');
        console.log(err)
    })
})
router.put('/orderitem/:_id', async (req, res) => {
    
    console.log(req.params.id)
    let data = await orderitem.findByIdAndUpdate(
        {_id: req.params._id},{
            $set:req.body
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
    if (data) {
        res.send({ message: "orderitem data delete successfully" });
    }
    else {
        res.send({ message: "orderitem data cannot delete successfully" })
    }
})

export default router;
