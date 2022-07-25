import express from 'express'
import device from '../models/device.js';
const router = express.Router();

router.get('/device', async (req, res) => {
    let data = await device.find(req.data);
    res.send(data);
})

router.post('/device', async (req, res) => {
    const {  name } = req.body;
    const data = await new device({  name });
    await data.save().then(result => {
        console.log(result, "Device data save to database")
        res.json({
            name: result.name
        })
    }).catch(err => {
        res.status(400).send('unable to save database');
        console.log(err)
    })
})
router.put('/device/:_id', async (req, res) => {
    console.log(req.params.id)
    let data = await device.updateOne(
        {_id:req.body._id},
        {
            $set: req.body
        });
    if (data) {
        res.send({ message: "device data updated successfully" });
    }
    else {
        res.send({ message: "device data cannot be updated successfully" })
    }
})
router.delete('/device/:_id', async (req, res) => {
    console.log(req.params)
    let data = await device.deleteOne(req.params)
    if (data) {
        res.send({ message: "device data delete successfully" });
    }
    else {
        res.send({ message: "device data cannot delete successfully" })
    }
})
export default router;