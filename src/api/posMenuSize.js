import express from 'express'
import posMenuSize from '../models/posMenuSize.js'

const router = express.Router()


router.get('/PosMenuSize', async (req, res) => {
    let data = await posMenuSize.find(req.data);
    res.send(data);

})

router.post('/PosMenuSize', async (req, res) => {
    const { id, row, column } = req.body;
    const data = await new posMenuSize({ id, row, column });
    await data.save().then(result => {
        console.log(result, "PosMenuSize data save to database")
        res.send("PosMenuSize data saved to database");
    }).catch(err => {
        res.status(400).send('unable to save database');
        console.log(err)
    })
})
router.put('/PosMenuSize/:_id', async (req, res) => {
    // const data= await device();
    console.log(req.params)
    let data = await posMenuSize.updateOne(
        req.params,
        {
            $set: req.body
        });
    res.status(data, 'data updated').send('data updated')
})
router.delete('/PosMeneSize/:_id', async (req, res) => {
    console.log(req.params)
    let data = await posMenuSize.deleteOne(req.params)
    res.send(data)
})

export default router;