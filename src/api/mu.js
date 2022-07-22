import express from 'express'
import mu from '../models/mu.js'

const router = express.Router()

router.get('/mu', async (req, res) => {
    let data = await mu.find(req.data);
    res.send(data)
})

router.post('/mu', async (req, res) => {
    const { name, code } = req.body;
    let data = await new mu({ name, code })
    await data.save().then(result => {
        console.log(result, "Mu data save to database")
        res.json({
            name: result.name,
            code: result.code
        })
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
    // res.status(data, 'data updated').send('data updated')
    if (data) {
        res.send({ message: "mu data updated successfully" });
    }
    else {
        res.send({ message: "mu data cannot be updated successfully" })
    }
})

router.delete('/mu/:_id', async (req, res) => {
    console.log(req.params)
    let data = await mu.deleteOne(req.params)
    // res.send(data)
    if (data) {
        res.send({ message: "mu data delete successfully" });
    }
    else {
        res.send({ message: "mu data cannot delete successfully" })
    }
})

export default router;