import express from 'express';
import table from '../models/tabledata.js';


const router = express.Router();

router.get('/table', async (req, res) => {
    console.log("this is get api of table")
    const data = await table.find(req.data);
    res.send(data);


})
router.post('/table/add', async (req, res) => {
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

export default router