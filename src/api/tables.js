import express from 'express';
import tables from '../models/tables.js';


const router = express.Router();

router.get('/tables', async (req, res) => {
    console.log("this is get api of table")
    const data = await tables.find(req.data);
    res.send(data);


})
router.post('/tables', async (req, res) => {
    const { tableNo, name, description, hasLampixDevice } = req.body;
    let data = new tables({ tableNo, name, description, hasLampixDevice });
    await data.save().then(result => {
        console.log(result, "Tables data save to database")
         res.json({
            tableNo: result.tableNo,
            name: result.name,
            description: result.description,
            hasLampixDevice: result.hasLampixDevice
        })
    }).catch(err => {
        res.status(400).send("unable to save to database");
        console.log(err)
    });

})

router.put('/tables/:_id', async (req, res) => {
    console.log(req.params)
    let data = await tables.updateOne(
        req.params,
        {
            $set: req.body
        });
    // res.status(data, 'data updated').send('data updated')
    if (data) {
        res.send({ message: "tables data updated successfully" });
    }
    else {
        res.send({ message: "tables data cannot be updated successfully" })
    }
})
router.delete('/tables/:_id', async (req, res) => {
    console.log(req.params)
    let data = await tables.deleteOne(req.params)
    // res.send(data)
    if (data) {
        res.send({ message: "tables data delete successfully" });
    }
    else {
        res.send({ message: "tables data cannot delete successfully" })
    }
})

export default router;