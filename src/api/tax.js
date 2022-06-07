


import express from 'express'
import tax from '../models/tax.js'

const router = express.Router()


router.get('/tax', async (req, res) => {
    let data = await tax.find(req.data);
    res.send(data);

})

router.post('/tax/add', async (req, res) => {
    const { id,name, taxValue } = req.body;
    const data = await new tax({ id, name, taxValue});
    await data.save().then(result => {
        console.log(result, "Tax data save to database")
        res.send("Tax data saved to database");
    }).catch(err => {
        res.status(400).send('unable to save database');
        console.log(err)
    })
})
router.put('/tax/edit/:id', async (req, res) => {
    // const data= await device();
    console.log(req.params)
    let data = await tax.updateOne(
        req.params.id,
        {
            $set: req.body
        });
    res.status(data, 'data updated').send('data updated')
})

export default router;