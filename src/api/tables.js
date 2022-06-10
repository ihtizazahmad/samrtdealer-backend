import express from 'express';
import table from '../models/tabledata.js';


const router = express.Router();

router.get('/table', async (req, res) => {
    console.log("this is get api of table")
    const data = await table.find(req.data);
    res.send(data);


})
router.post('/table', async (req, res) => {
    const { Id, Operater, TableNo, TableName, Amount } = req.body;
    let data = new table({ Id, Operater, TableNo, TableName, Amount });
    await data.save().then(result => {
        console.log(result, "Table data save to database")
        res.send("Table saved to database");

    }).catch(err => {
        res.status(400).send("unable to save to database");
        console.log(err)
    });

})

router.put('/table/:_id', async (req, res) => {
    console.log(req.params)
    let data = await table.updateOne(
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
router.delete('/table/:_id', async (req, res) => {
    console.log(req.params)
    let data = await table.deleteOne(req.params)
    // res.send(data)
    if (data) {
        res.send({ message: "tables data delete successfully" });
    }
    else {
        res.send({ message: "tables data cannot delete successfully" })
    }
})

export default router;