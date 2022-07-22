
import express from 'express'
import tax from '../models/tax.js'

const router = express.Router()


router.get('/tax', async (req, res) => {
    let data = await tax.find(req.data);
    res.send(data);

})

router.post('/tax', async (req, res) => {
    const {name, taxValue } = req.body;
    const data = await new tax({ name, taxValue});
    await data.save().then(result => {
        console.log(result, "Tax data save to database")
        res.json({
            name: result.name,
            taxValue: result.taxValue
        })
    }).catch(err => {
        res.status(400).send('unable to save database');
        console.log(err)
    })
})
router.put('/tax/:_id', async (req, res) => {
    console.log(req.params)
    let data = await tax.updateOne(
        req.params,
        {
            $set: req.body
        });
    if (data) {
        res.send({ message: "tax data updated successfully" });
    }
    else {
        res.send({ message: "tax data cannot be updated successfully" })
    }
})
router.delete('/tax/:_id', async (req, res) => {
    console.log(req.params)
    let data = await tax.deleteOne(req.params)
    if (data) {
        res.send({ message: "tax data delete successfully" });
    }
    else {
        res.send({ message: "tax data cannot delete successfully" })
    }
})

export default router;