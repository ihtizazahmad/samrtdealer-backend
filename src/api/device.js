import express from 'express'
import device from '../models/device.js';
const router = express.Router();

router.get('/device', async (req, res) => {
    let data = await device.find(req.data);
    res.send(data);
})

router.post('/device', async (req, res) => {
    const { id, name } = req.body;
    const data = await new device({ id, name });
    await data.save().then(result => {
        console.log(result, "Device data save to database")
        res.send("device data saved to database");
    }).catch(err => {
        res.status(400).send('unable to save database');
        console.log(err)
    })
})
router.put('/device/:key', async (req, res) => {
    const data= await device();
    const result = data.updateOne({key : req.params.key}, {$set: req.body});
    res.status(result,'data updated').send('data updated');
})
export default router