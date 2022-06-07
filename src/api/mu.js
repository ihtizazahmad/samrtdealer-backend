import express from 'express'
import mu from '../models/mu.js'

const router = express.Router()

router.get('/mu', async (req, res) => {
    let data = await mu.find(req.data);
    res.send(data)
})

router.post('/mu', async (req, res) => {
    const { id, name, code } = req.body;
    let data = await new mu({ id, name, code })
    await data.save().then(result => {
        console.log(result, "Mu data save to database")
        res.send("Mu data saved to database");
    }).catch(err => {
        res.status(400).send('unable to save database');
        console.log(err)
    })
})

router.put('/mu/:_id', async (req, res) => {
    let data = await mu.updateOne(
        req.params,
        {
            $set: req.body
        });
    res.status(data, 'data updated').send('data updated')
})

export default router;