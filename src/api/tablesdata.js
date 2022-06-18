import express from 'express';
import tabledata from '../models/tabledata.js';


const router = express.Router();

router.get('/table', async (req, res) => {
    console.log("this is get api of table")
    const data = await tabledata.find(req.data);
    res.send(data);


})
router.post('/table', async (req, res) => {
    const { Id, Operator, TableNo, TableName, Amount } = req.body;
    let data = new tabledata({ Id, Operator, TableNo, TableName, Amount });
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
    let data = await tabledata.updateOne(
        req.params,
        {
            $set: req.body
        });
    // res.status(data, 'data updated').send('data updated')
    if (data) {
        res.send({ message: "table data updated successfully" });
    }
    else {
        res.send({ message: "table data cannot be updated successfully" })
    }
})
router.delete('/table/:_id', async (req, res) => {
    console.log(req.params)
    let data = await tabledata.deleteOne(req.params)
    // res.send(data)
    if (data) {
        res.send({ message: "table data delete successfully" });
    }
    else {
        res.send({ message: "table data cannot delete successfully" })
    }
})

export default router;